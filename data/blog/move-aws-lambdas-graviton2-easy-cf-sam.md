---
title: 'Move AWS Lambdas to Graviton2 with Cloudformation/SAM'
date: '2021-10-01'
tags: ['aws', 'lambda', 'aws sam', 'cloudformation', 'graviton']
draft: false
summary: 'How to move your existing AWS Lambda functions to Graviton2 easily with Cloudformation/SAM.'
---

Yesterday, Amazon Web Services (AWS) shared [AWS Lambda Functions Powered By Graviton2 Processor](https://aws.amazon.com/blogs/aws/aws-lambda-functions-powered-by-aws-graviton2-processor-run-your-functions-on-arm-and-get-up-to-34-better-price-performance/).

At a high-level AWS claim:

* Up to 19% better performance
* At 20% lower cost
* Also applies to functions using provisioned concurrency.

All supported Lambda runtimes, including the custom runtime are supported. You just need to be careful with any binaries or functions packaged as containers to ensure they are built to support the architecture.

To help with performance testing, you can create two versions of a function, one in x86 and one for Arm. You can then use an alias with appropriate weights to distribute traffic between them. Once your test is complete, you can compare the performance difference within CloudWatch.

When migrating from x86 to Arm in production, you can use the same function version and weighted alias approach. This will allow you to slowly start ramping up, e.g. from 1%, gradually up to 100%. If something looks wrong, or you are experiencing errors, then adjust the weights down to zero to force traffic back to the x86 function.

Everything I deploy to AWS is via Cloudformation or AWS SAM. Below we will look at how to configure those to use the new architecture.

## Update CLIs

If you use a CLI tool to deploy, it is probably a good idea to update to the latest one for your setup. That will ensure it's compatible with the new changes.

* [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
* [AWS SAM CLI](https://github.com/aws/aws-sam-cli)

## Template Changes

The example below shows the changes required for an `AWS::Lambda::Function` and an `AWS::Lambda::LayerVersion`. The changes are the same if you are using an `AWS::Serverless::Function`. 

```yaml
exampleLambdaFunction:
  Type: AWS::Lambda::Function
  Properties:
    # OTHER ITEMS REMOVED FOR EXAMPLE
    Layers:
      - !Ref exampleLibrary
    Architectures:
      - arm64

exampleLibrary:
  Type: AWS::Lambda::LayerVersion
  Properties:
    # OTHER ITEMS REMOVED FOR EXAMPLE
    CompatibleArchitectures:
      - arm64
```

Now the change is made, you are ready to deploy using your preferred mechanism, whether thats CLI or via the console.

## Summary

There is really no reason not to try out the changes. They perform better, cost less, and the changes are minimal. There are also mechanisms in place by using the function versions and alias to do a gradual rollout until you have the confidence to switch over fully.

## Further reading

* https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html
* https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html
* https://docs.aws.amazon.com/lambda/latest/dg/configuration-aliases.html
