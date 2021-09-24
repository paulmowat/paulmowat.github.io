---
title: 'New Relic Lambda Monitoring at Scale'
date: '2021-09-24'
tags: ['aws', 'cloudformation', 'new relic']
draft: false
summary: 'New Relic Lambda Monitoring at Scale powered by Cloudformation Macros.'
---

# New Relic Lambda Monitoring at Scale

## Overview

As part of our monitoring and observatory strategy we utilise New Relic. This is a tool that give us the ability to see detailed information from our applications and how they are used.

As part of our MyWorkplace and Platform solutions we wanted to implement New Relic across the board. The goal was to get the distributed tracing functionality working end to end, from the browser request all the way through to our APIs. 

This would give us the benefit of being able to track and debug a single trace through its entire lifespan as required.
New Relic provide a few different mechanisms that can be used to achieve this, that cover most scenarios.

1.	Modifying the AWS Cloudformation / SAM template for each Lambda function.
2.	A CLI tool that can be run to add the required information in.
3.	The legacy approach. A node.js package that can be built into your source code.

For MWP and the Platform, AWS Cloudformation via the AWS Serverless Application Model (SAM) is heavily used. Our entire solution is built using serverless technology with a large amount of Lambda functions.

**Point 1** – This posed a problem for us as the development effort to modify all of the AWS Cloudformation / SAM templates for each of the serverless functions would be large. Across the solution we are currently sitting at over 1000 functions and that number is continually growing as new functionality is developed. We also felt it left the templates a lot of information that wasn’t relevant to the actual solution. It was an immediate no go.

**Point 2** - Looked a little more promising. It could be injected into our CI/CD process and apply automatically. Some testing was done and initially it looked really promising. But we then ran into an issue where it didn’t work against versioned Lambdas. Which we use heavily when the Lambda powers an API, or when it has provisioned concurrency enabled to improve latency.  Therefore, after some investigation this approach was also a no go.

**Point 3** – Similar to Point 1 this would write a lot of development effort to change all our code to implement. The fact it was also deemed as the legacy approach made us uncomfortable to implement into a brand new solution.

After looking at the options provided from New Relic we didn’t really have a go forward approach that could be implemented easily without a lot of development effort. 

## Solution

After a little thinking we had a eureka moment and realized, we could automate it at the point of deployment by using the awesome feature that is Cloudformation macros. 

A macro is a piece of logic that the AWS Cloudformation/SAM template gets processed through at the point of deployment.

This meant that we could take the same approach as Point 1, but rather than having to get developers to manually apply it. We could do it automatically at the point of deployment.

After a little bit of work and investigation we came up with a solution that covered our needs.

Once we had the new macro deployed we could then get our teams to apply it as part of their next deployment.

The changes required are small, a one line change to each Cloudformation/SAM template that we have.

Change `Transform: AWS::Serverless-2016-10-31` to become `Transform: [NewRelicLambdaInstrumentation, AWS::Serverless-2016-10-31]`

That is how we leveraged the power of Cloudformation macros to save development effort and automate New Relic Lambda instrumentation at scale.

You can find the solution on our Github repository at https://github.com/advancedcsg-open/aws-cfn-newrelic-instrument
