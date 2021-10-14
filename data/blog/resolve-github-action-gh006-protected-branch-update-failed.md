---
title: 'How to resolve GH006 Protected Branch Update Failed'
date: '2021-10-14'
tags: ['github', 'rush-js']
draft: false
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

A while back we started to use [Rush](https://rushjs.io/) as our monorepo management tool. It's a fantastic tool and helps us in a multitude of ways to make our development process easier. 

As part of it's usage we use the [rush change](https://rushjs.io/pages/commands/rush_change/) functionality. This allows our developers to create [change logs](https://rushjs.io/pages/best_practices/change_logs/) for their PRs that are then identified by the build pipelines to automatically increment package versions.

In order to do this [Rush](https://rushjs.io/) creates a version bump branch and merges it back in as part of the build pipeline. This works absolutely fine when branch protection is turned off.

## The Problem

However, if branch protection is enabled you get a lovely error like the following.

```bash
error: GH006: Protected branch update failed for refs/heads/main
error: Required status check "Build" is expected. At least 1 approving review is required by reviewers with write access
```

This is a problem! We definitely want to use protected branches and definitely want to be able to use [rush change](https://rushjs.io/pages/commands/rush_change/) to control versions. So how can we fix?

I assumed this would be a easy fix and just a case of giving the Github action extra permissions to push to the protected branch. Wrong!

After spending a bit of time Googling I came across a Github community post @ <https://github.community/t/allowing-github-actions-bot-to-push-to-protected-branch/16536>. The TLDR is that Github can't make the change to fix it the way people want for security reasons.

At that point in time were we busy with deadlines and had to make a decision on how to progress.  That decision was to temporarily disable branch protection even though it felt wrong. The issue was put in the backlog to be looked at later.

## Solution

Fast forward to this past week and I finally got a bit of time to investigate further. There is unfortunately no movement from GitHub's side, but I managed to track down a workaround.

The workaround is as follows:

1. Create a new a Github user specifically for building.

2. Create a new personal access token for that user with access to `repo`.

![github personal access token](/static/images/resolve-github-action-gh006-protected-branch-update-failed/github_pat.png)

3. Add the personal access token as a Github secret e.g. BUILD_SVC_PAT.

![github secret](/static/images/resolve-github-action-gh006-protected-branch-update-failed/github_secret.png)

4. Update your branch protection and add your new build user to 'Restrict who can push to matching branches'.

5. Update your Github action to checkout the code using the Github secret.

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

This will let you configure branch protection and let the [rush change](https://rushjs.io/pages/commands/rush_change/) version bump branch be committed.

Now this workaround isn't perfect. You are basically creating a admin user to do the build, and allowing that user to push to the protected branch.

This means you can't set the `Include Administrators` branch protection rule, therefore your other admins can still push directly and bypass branch protection. It does however stop any other non-admin developers being able to push directly to the branch. For our needs it was a suitable solution.