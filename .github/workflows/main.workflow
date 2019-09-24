workflow "CI" {
  resolves = [
    "gimenete/eslint-action@1.0",
  ]
  on = "pull_request"
}

action "gimenete/eslint-action@1.0" {
  uses = "gimenete/eslint-action@1.0"
  secrets = ["GITHUB_TOKEN"]
}
