---
title: 'How we moved from Artifactory and saved $200k p.a. Part 2 of 5 - Design'
date: '2022-09-26 10:01'
tags: ['artifactory', 'aws', 'codeartifact', 's3', 'ecr']
draft: false
summary: 'A 5-part blog post by Alex Harrington and Paul Mowat covering the migration of 25 TB of artefacts from JFrog Artifactory to a custom solution we created for Advanced, achieving significant cost efficiency. This part covers our approach to design.'
---

## Introduction

Welcome back to Part 2 of our 5-part series on 'How we moved from Artifactory and saved $200k p.a'.

If you are just joining we recommend jumping back to the beginning and starting from there.

- [Part 1 of 5 - Planning](/blog/how-we-moved-from-artifactory-and-saved-200k/part-1-planning)

## Decision making

The nature of larger projects such as these requires plenty of discussion and decision-making around temporary and permanent processes. We had lots of data to migrate and we needed to be efficient in our decision-making process. We decided upon using [Architecture Decision Records](https://adr.github.io/) to log the key implementation decisions which significantly helped us deliver consistency throughout our support and guidance.

As it turned out, undertaking this method of logging was not onerous and we ended up with records for around a dozen key strategic choices that we made; an example of one being the choice to utilise a spot fleet of EC2 workers to perform the migration versus something like AWS Batch or ECS. At first glance, we expected to go with a solution based on AWS Batch or AWS ECS but we had requirements to move resources such as Windows container images and it was so helpful to be able to easily recover the decision steps when we moved to create tooling to support this.

## Workshopping

Workshopping commenced on the 10th of June 2022 and we had until the 4th of July 2022 to perform the required analysis, design and implement our solution.

![workshop image](/static/images/how-we-moved-from-artifactory-and-saved-200k/part-2/kvalifik-5Q07sS54D0Q-unsplash.jpg)

### Analysis of requirements

One of the first items of business was to determine which artefact types it was essential to support, those that would be unsupported and any transitions from these to corresponding supported types. Then we would need to determine the options to migrate to, whilst fulfilling the necessary obligations to supported packages and platforms.

Over the past few years, engineering at Advanced has been consolidating its toolchain and programming languages adopted by default. In no way intent on dissuading reviews of new or emerging options, but rather adding consistency in those used and bringing a larger collective intelligence to engineering as a whole.

From analysing our usage within Artifactory we settled upon support for [npm](https://www.npmjs.com/), [NuGet](https://www.nuget.org/), generic artefacts (zip, exe, dll etc), [Docker](https://www.docker.com/) images and [Maven](https://maven.apache.org/). We quickly determined that our biggest challenge would be Docker images, accounting for greater than 50% of our consumed storage, with several repositories holding more than 1 TB of image data. Latterly, Maven would also prove challenging.

From this analysis, we were acutely (and financially) aware that we were also wastefully holding onto obsolete build artefacts. We decided to use this as an opportunity to leverage our engineering teams to review and select the versions of artefacts that our products needed to retain. This would help reduce the scale of the migration ahead somewhat and perform some well-overdue housekeeping. After all, there is no point in migrating and paying for artefacts that are no longer required.

### Solution analysis

Having gathered an understanding of what needed support and delivery, we had to identify where we were going to migrate to.

AWS is our preferred Cloud Provider and platform, as well as a key technical partner. It was a natural choice to look at their services for our solution. From investigation, we found that [AWS CodeArtifact](https://aws.amazon.com/codeartifact/) was a decent fit for supporting npm, NuGet, Maven and Python (if required in the future), however, it was not a complete match for all our requirements. Favourably, [S3](https://aws.amazon.com/s3/) is an excellent fit for generic artefacts, and [Elastic Container Registry (ECR)](https://aws.amazon.com/ecr/) is perfectly appropriate for Docker images (even leading us to correct misunderstandings between images and repositories internally!).

We now had the artefact types we needed to support at a high level and where they were going to migrate to.

### Solution design

Now we firmly knew our direction, we needed to decide how we get there.

Initially, we considered publishing guidance around best practices for various AWS services to satisfy our artefact requirements but ultimately that was deemed unmaintainable.

We wanted to finish the project with our artefact management strategy in a much better position than it started. Significant to us was ensuring we had the ability to define convention, consistency, clear guidance and expectations. We aimed to provide a maintainable solution that continues to build upon the best practices as it matures.

This led us to agree that it was important for the culmination of the migration to result in a new, custom service that any engineering team within Advanced could consume. ***Advanced Artefacts*** was born.

We now had two streams we needed to complete within the project:

1. The Advanced Artefacts service
2. The Migration

We will get into the detail around these in future posts.

## Support channels

As mentioned previously Advanced has over seven hundred engineers from across the globe working on many projects and we needed to identify a strategy for how we could support them in the best way possible.

We came up with the following three-pronged approach.

### Documentation

We decided early that we needed to document all parts of the project to allow our engineering teams to self-serve where possible. Without good documentation, there is no way a team of four can support over seven hundred developers.

We focused on providing some getting-started documentation that walked teams through the process in an end-to-end fashion. Then proving the appropriate reference documentation for each step.

This covered items such as the support channels available, each team's responsibilities, the migration preparation and also information on how to use our new Advanced Artefacts service both locally and from our CI/CD pipelines.

A great deal of time was spent pouring over this, it was however crucial to the success of the project.

### Clinics

A technique that has worked fairly well for our organisation is the idea of online clinics. We held clinics twice a week for the duration of the project.

We used the first two clinics to kick off the project with our engineering teams. This helped us set timelines around key milestones and clear expectations on what was being delivered.

After that, they were reserved for anyone to drop into, receive updates and ask for assistance directly.

### Microsoft teams channel

Microsoft Teams is our internal communication tool, therefore, we created a dedicated channel that we would use for communicating any important updates to the engineering teams.

They could also ask us questions or get further clarification as required outside clinic sessions. The artefacts team committed to replying to the questions as soon as possible ensuring teams were unblocked and able to progress quickly.

## Next up

Now we have our design in place we need to start implementing it.

Next up, we will cover the creation of the Advanced Artefacts service.

- [Part 3 of 5 - The future is Advanced Artefacts](/blog/how-we-moved-from-artifactory-and-saved-200k/part-3-the-future-is-advanced-artefacts)
