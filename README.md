# typescript-action-renovate-config [![renovate-config](https://github.com/int128/typescript-action-renovate-config/actions/workflows/renovate-config.yaml/badge.svg)](https://github.com/int128/typescript-action-renovate-config/actions/workflows/renovate-config.yaml)

This repository contains a sharable config for Renovate.
It is designed for https://github.com/int128/typescript-action.


## Getting Started

Create `renovate.json` as follows:

```json
{
  "extends": [
    "config:base",
    "github>int128/typescript-action-renovate-config"
  ]
}
```
