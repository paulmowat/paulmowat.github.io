---
title: 'How to resolve GH006 Protected Branch Update Failed'
date: '2021-10-14'
tags: ['github', 'rush-js']
draft: false
summary: 'Learn how to resolve the Github GH006 Protected Branch Update Failed error by using a personal access token to provide access.'
images: ['/static/images/resolve-github-action-gh006-protected-branch-update-failed/title.png']
---

## Overview

At work, we've used Github protected branches for quite a while now. They allow us to enforce rules that developers must follow before their branches can be committed.

We typically set up the following:

1. Require a pull request before merging.
2. Require status checks to pass before merging.
3. Require the branch to be up to date before merging.
4. Require linear history.
5. Restrict who can push to matching branches.

These rules help us maintain quality by ensuring all branches meet the required criteria.

We started to use [Rush](https://rushjs.io/) as our monorepo management tool a while back. It's a fantastic tool and helps us in many ways to make our development process simpler. 

As part of its usage, we use the [rush change](https://rushjs.io/pages/commands/rush_change/) functionality, which allows our developers to create [change logs](https://rushjs.io/pages/best_practices/change_logs/) for their PRs. These are then identified by the build pipeline and automatically increment the package versions.

To do this [Rush](https://rushjs.io/) creates a version bump branch and merges it back in as part of the build pipeline. This process works fine when branch protection is disabled.

## The Problem

However, when branch protection is enabled, you get a lovely error like the following.

```bash
error: GH006: Protected branch update failed for refs/heads/main
error: Required status check "Build" is expected. At least 1 approving review is required by reviewers with write access
```

This is a problem! We want to use protected branches and want to be able to use [rush change](https://rushjs.io/pages/commands/rush_change/) to control versions. So how can we fix it?

I assumed this would be an easy fix and just a case of giving the Github action extra permissions to push to the protected branch. Wrong!

After spending a bit of time Googling, I came across a Github community post @ <https://github.community/t/allowing-github-actions-bot-to-push-to-protected-branch/16536>. The TLDR is that Github can't make the change to fix it for security reasons.

At that point in time, we were busy with deadlines and had to decide quickly on how to progress.  That decision was to temporarily disable branch protection and look at it later, even though it felt wrong. The issue was put in the backlog to be looked at later.

## Solution

Fast forward to last week, and I finally got some time to investigate further. There is, unfortunately, no movement from GitHub's side, but I managed to track down a workaround.

The workaround is as follows:

1. Create a new Github user specifically for building.

2. Create a new personal access token for that user with access to `repo`.

![github personal access token](/static/images/resolve-github-action-gh006-protected-branch-update-failed/github_pat.png)

3. Add the personal access token as a Github secret e.g. BUILD_SVC_PAT.

![github secret](/static/images/resolve-github-action-gh006-protected-branch-update-failed/github_secret.png)

4. Update your branch protection and add your new build user to 'Restrict who can push to matching branches'.

5. Update your Github action to check out the code using the Github secret.

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

Now, this workaround isn't perfect! You are creating an admin user who can do the build and allowing that user to push to the protected branch.

This means you can't set the `Include Administrators` branch protection rule, therefore your other admins can still push directly and bypass branch protection. However, it does stop any other non-admin developers from being able to push directly to the branch. For our needs, it was a suitable solution.
