workflow "CI" {
  on = "push"
  resolves = [
    "gimenete/eslint-action@1.0"
  ]
}

action "gimenete/eslint-action@1.0" {
  uses = "gimenete/eslint-action@1.0"
}
