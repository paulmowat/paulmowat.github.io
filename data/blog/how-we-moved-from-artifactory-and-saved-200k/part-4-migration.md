---
title: 'How we moved from Artifactory and saved $200k p.a. Part 4 of 5 - Migration'
date: '2022-09-26 10:03'
tags: ['artifactory', 'aws', 'codeartifact', 's3', 'ecr']
draft: false
summary: 'A 5-part blog post by Alex Harrington and Paul Mowat covering the migration of 25 TB of artefacts from JFrog Artifactory to a custom solution we created for Advanced, achieving significant cost efficiency. This part covers our approach to migration.'
---

## Introduction

Welcome back to Part 4 of our 5-part series on ‘How we moved from Artifactory and saved $500k p.a.’.

If you are just joining we recommend jumping back to the beginning and starting from there.

- [Part 1 of 5 - Planning](/blog/how-we-moved-from-artifactory-and-saved-200k/part-1-planning)
- [Part 2 of 5 - Design](/blog/how-we-moved-from-artifactory-and-saved-200k/part-2-design)
- [Part 3 of 5 - The future is Advanced Artefacts](/blog/how-we-moved-from-artifactory-and-saved-200k/part-3-the-future-is-advanced-artefacts)

## Migration preparation

The following steps were performed in readiness:

- Publish a **[checklist](#checklist)** of steps that teams could follow which would help identify product assets that need migrating
- Research how we could append custom metadata to existing artefacts
  - **[tagging](#tagging)**
- Study the Artifactory REST API and AQL documentation
- Research metrics that could be queried for comparison and verification purposes:
  - storage summary
    - size
    - number of artefacts
    - number of files
    - number of folders
  - creation timestamps
    - deployment ordering
- Analyse the repository path structure and flag outliers
- Research publishing options for native CLIs through a lens of using containers to perform the workload
  - discovered requirements which ruled out AWS Batch and ECS
    - e.g. windows/windows containers
- Build a categorised data source to map existing repositories, including:
  - dev or release repository
  - Advanced Artefacts repository name using new dev/release convention
  - flag large repository
  - flag empty repository
  - flag large numbers of artefacts in the repository
  - flag unsupported/problematic repository package types
- Consider failure scenarios and [recovery option](#failure-recovery) features:
  - dry-run
  - ability to replay
  - debug levels
  - resume (using offsets)
  - clear progress counters
- Log decisions using Architecture Design Records
- Review Architecture Design Records

We spent a considerable amount of our time budget on the planning and preparation stages. This served us well.

### Checklist

To facilitate the process, we set about creating a preparation checklist that was intended to give all impacted products and teams a clear and concise checklist of preparational steps that would (hopefully) heighten awareness in the appropriate areas. The main points this covered were:

- Begin ASAP!
- Determine a complete list of impacted builds/artefacts which needed to be supported in production
- Review all CI/CD pipelines
- Review all runbooks (automated and manual)
- Review all production deployments
- Review all disaster recovery processes
- Identify all artefacts that will need to be migrated through property sets tagging in Artifactory

### Tagging

However, before we begin looking at these, we need to cover tagging. Artifactory has a useful feature called Property Sets. We decided early (decision log - check) in the process to make wide use of custom properties through Property Sets. Our requirements were principally:

1. Artefact hygiene - remove unused or unsupported packages, waste
2. Docker images underlying OS type - differentiate between Linux and Windows containers

**Note:** That whilst possible to read a manifest for each Docker image and determine the existence of foreign layers, we were focused on stability and repeatability as well as speed. We wanted to utilise the native tooling as much as possible and felt that determining supported schema/configuration around custom tooling would negatively impact complexity.

### Failure recovery

The focus for migrations was specific to our end goals and where appropriate we tried to reuse our tools across different package types. Ultimately, the project as a whole needed to be successful once, with many smaller eventual successes along the way. Building effective tooling was critical to the success of the project. We needed to use software to automate as much as we could whilst also allowing us to clearly aggregate the activities we had performed which in turn could be used as means of verification.

Key features such as dry-run mode, debug levels, and the ability to replay/resume from an offset was essential. The sheer volume of different files, paths, conventions/structures meant that we could only analyse so far before we needed to begin. We fully expected the need to debug activities during the migration phase and that these tools would really support us.

## Migration tooling

Large Network bandwidth and scalable compute resources were top of our platform requirements. The choices taken would drip down into the tooling we created.

As an organisation, we place a strong emphasis on Infrastructure as Code (IaC) so creating processes and workflows around [AWS Systems Manager](https://aws.amazon.com/systems-manager/) using the AWS CDK is expected. We created stacks that enabled us to scale our migration efforts on demand which included:

- Migration stack
- EC2 Spot Fleet [worker node](#migration-workers) stacks
  - Windows
  - Linux
- SSM Documents library stacks
- Custom command line interface tools
  - archive runner
  - migrator
  - migraterunner

![migrator cli](/static/images/how-we-moved-from-artifactory-and-saved-200k/part-4/migrator.png)

Concurrency was an interesting feature. The default was to plan for concurrency, if we run tasks concurrently across our cloud resources then this would accelerate the process, surely? Frustratingly, this was not the case. In the details of AWS CodeArtifact were areas where the order that packages were uploaded is important, particularly npm and Maven. Furthermore, package managers have different ways to determine the latest version, but support for this in AWS CodeArtifact was not universal during our project. We also discovered that there were places where Artifactory supported deprecated features which we happily used, yet AWS CodeArtefact did not. This resulted in us essentially serially migrating packages but utilising the cursor-like features of offset and limits to optimise our efforts.

### Migration workers

The migration workers performed the brunt of the migration tasks and were orchestrated through AWS Systems Manager. The (awesome) network throughput enabled by AWS meant we were able to migrate hundreds of GiB of data per hour. This was crucial given that the order that most packages were migrated in was important.

Using property sets that were laboriously set by our engineering teams, the project was able to leverage the excellent Artifactory API as a catalogue/pseudo-state-machine through which, workers could page their way whilst advancing the migration.

In (often long-running) batches, workers would *pull* packages using the native package managers to the worker’s local storage, then the documented AWS CodeArtifact/ECR/S3 tool was used to *push* packages to their new location. This is where container images became tricky because pushing and pulling containers needs to be performed on a host running the relevant operating system. Whilst it is documented in the AWS SDK that you pull and push layers as mere blobs, the guidance was that this was only a feature to be used internally which was enough to ward us off.

### Command line interfaces (CLIs)

A handful of CLI tools were authored in [Go](https://go.dev/). These tools provided the brunt of the work where validation and custom logic were applied to transfer the different artefact types under the conditions of the project. AWS SSM documents were used in orchestrating the tools to transition the artefacts to the correct destination repositories via the appropriate worker node fleet. Much credit needs to go to the excellent [spf13/cobra](https://github.com/spf13/cobra) commander Go module that was used in these CLIs.

## Migrating 1.5 million artefacts

![lego image](/static/images/how-we-moved-from-artifactory-and-saved-200k/part-4/xavi-cabrera-kn-UmDZQDjM-unsplash.jpg)

### Migration process

We wrote our tooling to support a ticket-driven approach where teams could raise tickets to work with the implementation team and migrate their product packages in batches, working together to verify successful completion.

This was important in allowing us to progressively work through the migration rather than a whole big-bang event occurring on an agreed date. Such an approach would be simply unworkable, requiring far too much alignment (thousands of pipelines updated in anticipation). Finding a date that would perfectly fit with hundreds of teams would be virtually impossible and crucially what rollback options would we have? Thus we decided this progressive approach would give us greater flexibility and the reassurance to engage team by team, product by product while checking off milestones on the route to completion.

As things panned out, we ended up with a large backlog of migration activities ranging from a few packages to entire release repositories containing hundreds of thousands of artefacts and terabytes of data. The backlog was continually refined and tickets were resolved step by step with the owning teams. The team had overall responsibility for verifying the migration objective had been met before marking the work as complete.

Resolving all migration tickets in the backlog would culminate in disabling write access for all standard users at a key, predetermined date, before swiftly proceeding, after a reasonable holding period, to remove complete access for all users, except system administrators. Any issues experienced along the way would be addressed in isolation, verifying with the team and making updates to our tooling as required.

### Verification

This was tricky. Reporting on the AWS CodeArtifact side is currently poor (09/2022). CloudWatch metrics are entirely missing but ultimately it was not at all straightforward to aggregate key metrics and statistics in the same way you can with Artifactory.

We had to get creative and had to combine metrics queried from the Artifactory REST API with internal counters residing within our tooling to cross-reference our progress. Through deploying webhooks and using DynamoDB to record the dates when batches of work were undertaken we could replay activities using the DateTime offset to determine any deltas where pipelines were not fully updated and artefacts were still being deployed to Artifactory after the migration activity for the solution artefacts had begun. This worked out well and coupled with a reduction of write access permissions, enabled us to verify the process had worked to a point in time whilst giving us another window to replay the same batches but for a much smaller delta of packages. Significantly, as we advanced through the project, confidence grew as we were replaying actions over and over with consistent results. Testing our tooling was tricky so having the ability to utilise dry-run mode was invaluable.

## Next up

The migration has now been completed.

Next up, we’ll take a look at whether we’ve reached our goal.

- [Part 5 of 5 - Reaching our goal](/blog/how-we-moved-from-artifactory-and-saved-200k/part-5-reaching-our-goal)
