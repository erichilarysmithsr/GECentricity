workflow "New workflow" {
  on = "push"
  resolves = ["Docker Registry"]
}

action "Docker Registry" {
  uses = "actions/docker/login@76ff57a6c3d817840574a98950b0c7bc4e8a13a8"
  secrets = ["GITHUB_TOKEN"]
}

workflow "New workflow 1" {
  on = "push"
  resolves = ["GitHub Action for Azure"]
}

action "GitHub Action for Azure" {
  uses = "actions/azure@4919f1449100fb0e6111a52466de7f2a1dc861dc"
  secrets = ["GITHUB_TOKEN"]
}
