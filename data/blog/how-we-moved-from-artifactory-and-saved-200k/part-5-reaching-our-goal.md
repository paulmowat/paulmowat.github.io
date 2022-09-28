---
title: 'How we moved from Artifactory and saved $200k p.a. Part 5 of 5 - Reaching our goal'
date: '2022-09-26 10:04'
tags: ['artifactory', 'aws', 'codeartifact', 's3', 'ecr']
draft: false
summary: 'A 5-part blog post by Alex Harrington and Paul Mowat covering the migration of 25 TB of artefacts from JFrog Artifactory to a custom solution we created for Advanced, achieving significant cost efficiency. This part covers reaching our goal and some stats behind the process.'
---

## Introduction

Welcome back to the final part of our 5-part series on 'How we moved from Artifactory and saved $200k p.a'.

If you are just joining we recommend jumping back to the beginning and starting from there.

- [Part 1 of 5 - Planning](/blog/how-we-moved-from-artifactory-and-saved-200k/part-1-planning)
- [Part 2 of 5 - Design](/blog/how-we-moved-from-artifactory-and-saved-200k/part-2-design)
- [Part 3 of 5 - The future is Advanced Artefacts](/blog/how-we-moved-from-artifactory-and-saved-200k/part-3-the-future-is-advanced-artefacts)
- [Part 4 of 5 - Migration](/blog/how-we-moved-from-artifactory-and-saved-200k/part-4-migration)

## The deadline

On 19th August 2022 at 21:56 the final migration request was completed, a proud moment. The migration of approximately 1.5 million artefacts had been planned, transferred and verified. We had met our tight deadline.

![completing the final migration request](/static/images/how-we-moved-from-artifactory-and-saved-200k/part-5/completion.png)

completing the final migration request

A short while after, on the 31st of August 2022, our subscription with JFrog expired and in turn, all access was revoked. This was the point of no return and the milestone at which we were most apprehensive. The team were ready for the inevitable influx of tickets. Largely (perhaps surprisingly) though, the noise was relatively quiet. Yes, we had some issues, we expected these and had readied ourselves but nothing much arrived. A positive sign!

## A pleasant surprise

This, perhaps, provides a good opportunity to let us recall the goal we set for ourselves:

> To migrate all requested artefacts from Artifactory without losing any, writing custom tooling as necessary

Approaching 4 weeks since our Artifactory subscription ended and the Advanced Artefacts service went live, post-migration support has consistently been quiet, with zero packages lost to date.

## In summary some interesting facts and stats…

To conclude we thought it would be nice to summarise some of the key points from the process:

- 1.5 million artefacts analysed
- 24.5 TB of data migrated without losing a file.
- 222 tickets processed. 215 completed, 7 for phase 2.
- 18 clinics
  - The first clinic had over 130 participants
- 772 users interacted with through our internal Ms Teams Channel:
  - 109 posts
  - 590 replies
  - 67 mentions
  - 115 reactions
- Provided dedicated support channels with fast response (typically less than an hour during UK hours)
- Days sleeping, thinking and dreaming of artefacts - 90+
- 14+ hour days - many many many

### The numbers

- 1,200,624 objects in S3
- 25 TB storage consumed
- 21.5 MB average object size
- 15,307.69 EC2 usage hours
- 2,540 migration jobs run with SSM
- 888 EC2 spot instances used
- 56 CloudFormation stacks created
- 10,539 ECR Authorization tokens requested
- 5,027 ECR Image pushes
- 7,968 CloudWatch log streams created
- 680,263 CloudWatch PutLogEvents called
- 100% Spot instance utilisation

### The costs and savings

- The 3-Month spend over the project, including the migration workers = $8400
  - Our original budget estimate = $6000
- The 3-Month S3 storage costs = $407.05
- The 3-Month CodeArtifact costs = $161.19
- The 3-Month ECR costs = $115.94
- Using that as a basis of calculating our costs for the upcoming year, we estimate savings of $200,000 per annum vs our Artifactory subscription

    ![savings image](/static/images/how-we-moved-from-artifactory-and-saved-200k/part-5/mathieu-stern-1zO4O3Z0UJA-unsplash.jpg)

## That’s all folks

We are hugely proud of our efforts and what we have delivered. We would like to thank our engineering teams for their support and engagement. This was a tremendously challenging project, involving complexities, long hours and hard work, but overall it was incredibly fun and rewarding in equal measures.

Thanks for reading! Please return your chairs to an upright position and thanks for flying with Air Advanced Artefacts ;)
