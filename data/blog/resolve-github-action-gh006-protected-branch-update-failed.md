---
title: 'How to resolve GH006 Protected Branch Update Failed'
date: '2021-10-14'
tags: ['github', '']
draft: true
summary: 'How to resolve the GH006 Protected Branch Update Failed error using a personal access token.'
---

## Overview

At work we've used Github protected branches for a quite a while now. They allow us to enforce certain rules that developers must follow before branches can be committed.

We typically setup the following:

1. Require a pull request before merging.
2. Require status checks to pass before merging.
3. Require branch to be up to date before merging.
4. Require linear history.
5. Restrict who can push to matching branches.

These rules help us maintain quality by ensuring all branches meet the required criteria.

A while back we started to use [RushJS.io](https://rushjs.io/) as our mono-repo management tool. It's a fantastic tool and helps us in a multitude of ways to make our development process easier. 

As part of it's usage we use the `rush change` functionality. This allows our developers to create change files for their PRs that are then identified by the build pipelines to automatically increment package versions.

In order to do this `rush` creates a version bump branch and merges it back in as part of the build pipeline. This works absolutely fine when branch protection is turned off.

## The Problem

However, if branch protection is enabled you get a lovely error like the following.

```bash
error: GH006: Protected branch update failed for refs/heads/main
error: Required status check "Build" is expected. At least 1 approving review is required by reviewers with write access
```

This is a problem! We definitely want to use protected branches and definitely want to be able to use `rush change` to control versions. So how can we fix?

I assumed this would be a easy fix and just a case of giving the Github action extra permissions to push to the protected branch. Wrong!

After spending a bit of time Googling I came across a Github community post @ <https://github.community/t/allowing-github-actions-bot-to-push-to-protected-branch/16536>. The TLDR is that Github can't make the change to fix it for security reasons.

At that point in time were we busy with deadlines and had to make a decision on how to progress.  The decision was to temporarily disable branch protection, although it felt wrong. The issue was put in the backlog to be looked at later.

## Solution

Fast forward to this past week. I finally got a bit of time to investigate further and managed to track down a workaround.

The workaround is as follows:

1. Create a new a Github user specifically for building.

2. Create a new personal access token for that user with access to 

![github personal access token](/static/images/resolve-github-action-gh006-protected-branch-update-failed/github_pat.png)

3. Add the personal access token as a Github secret e.g. BUILD_SVC_PAT.

![github personal access token](/static/images/resolve-github-action-gh006-protected-branch-update-failed/github_secret.png)

4. Update your branch protection and add the user to 'Restrict who can push to matching branches'

5. Update your Github action to checkout the code using the personal access token

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checking out...
        uses: actions/checkout@v2
        with:
          token: ${{ secrets.BUILD_SVC_PAT }}
```

Now this workaround isn't perfect. Your basically creating a admin user to do the build and allowing that user to push to the protected branch. 

It means you can't set the 'Include Administrators' branch protection rule, therefore your admins can still push. It does however stop any other developers being able to push to the branch.