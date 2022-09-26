---
title: 'How we moved from Artifactory and saved $200k p.a. Part 1 of 5 - Planning'
date: '2022-09-26'
tags: ['artifactory', 'aws', 'codeartifact', 's3', 'ecr']
draft: false
summary: 'A 5-part blog post by Alex Harrington and Paul Mowat covering the migration of 25 TB of artefacts from JFrog Artifactory to a custom solution we created for Advanced, achieving significant cost efficiency. This part covers our approach to planning.'
---

## introduction

A 5-part blog post by Alex Harrington and myself covering the migration of 25 TB of artefacts from JFrog Artifactory to a custom solution we created for [Advanced](https://www.oneadvanced.com), achieving significant cost efficiency.

## a journey

Early in 2022, we decided that Artifactory had become an expensive option for us. Whilst a good product, Artifactory wasn't without difficulties surrounding our subscription. To provide a little more detail, specifically, you are either all in or all out with the JFrog platform, you can only subscribe to every component which is not too desirable at the enterprise level.

In retrospect, we came to learn of significant portions of the JFrog platform (Xray for example) from which we were not getting any real value (for us) and this made the overall service costly. Moreover, we were serious about doubling down on the security of our software supply chain and researching a wider (custom) array of best-in-class solutions.

Still, this was no easy decision as we were a large user of Artifactory with over 1.5 million artefacts published and 25 TB of data storage consumed. Many of our CI/CD pipelines and developer settings were all configured to use Artifactory, so the scale of the task was somewhat sizeable. Still, we proceeded to assess our options and planning the task(s) at hand was critical.

## and so it begins

Let’s start by declaring our initial goal:

> To migrate all requested artefacts from Artifactory without losing any, writing custom tooling as necessary

The possibility of migrating away from Artifactory was first aired at the beginning of January.

Artifactory comes under a category of services that could be described as quite "sticky". A SaaS solution where the impact of migrating away would reach far and wide within many an organisation.

Advanced has over 150 products active product suites delivering care to 40 million people throughout the UK, sending 10 million sporting fans through turnstiles and supporting 1.2 billion passengers to arrive at their destinations on time. Our solutions are engineered by hundreds of colleagues from across the globe, built using multiple technologies, living in more than 2600 GitHub repositories and powered by thousands of CI/CD pipelines. All deploying to numerous cloud/hybrid-cloud platforms. Notwithstanding backup, disaster recovery, [escrow](https://www.ses-escrow.co.uk/case-studies/nhs-case-study) and many other internal and market-driven requirements.

We needed to plan, but plan in a way that would allow us to scale.

## team

We formed a small dedicated artefacts team with 4 members that needed to support more than 700 engineers through the process. The artefacts team initially needed to design and implement the migration *machine*, followed by educating and guiding our engineering teams through the project. This had to be as efficient as possible, in order for it to scale.

The artefacts team structure was as follows:

- 1 x Principal DevOps Architect (Paul Mowat)
- 1 x Principal DevOps Engineer (Alex Harrington)
- 1 x Senior DevOps Engineer (Karthik Holikatti)
- 1 x DevOps Engineer (Likhith Kotian)

## milestones

Our next task was looking at the wider project and breaking it down into key milestones so we could share these. This was a critically important area. Accuracy and clarity in our communication were paramount.

Starting with setting a hard immovable deadline and taking heed from previous hard-learned lessons with sliding deadlines that run and run, we chose to set this date in stone and declared this at the outset of our engagement with our wider engineering community.

We felt this offered a powerful message, which clearly illustrated that urgent engagement was necessary from all sides.

![https://images.unsplash.com/photo-1559061156-4a46ec29107d?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy](https://images.unsplash.com/photo-1559061156-4a46ec29107d?ixlib=rb-1.2.1&q=80&cs=tinysrgb&fm=jpg&crop=entropy)

The key milestones were:

- 10-06-2022 - Project Kick-off - First implementation team workshop held to begin formulating the plan
- 04-07-2022 - Deadline for our design and implementation complete ready for a wider rollout
- 05-07-2022 - First Advanced Artefacts support clinic held with over 100 participants
- 06-07-2022 - Migration Period Start
- 19-08-2022 - Migration Period End
- 22-08-2022 - Engineering teams would lose access to Artifactory
- 31-08-2022 - Project End - Our Artifactory subscription would end

## next up

We have a team and plan, and now we needed to get to work on designing our solution.

- [Part 2 of 5 - Design](/blog/how-we-moved-from-artifactory-and-saved-200k/part-2-design)
