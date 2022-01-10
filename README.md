# typescript-action-renovate-config [![renovate-config](https://github.com/int128/typescript-action-renovate-config/actions/workflows/renovate-config.yaml/badge.svg)](https://github.com/int128/typescript-action-renovate-config/actions/workflows/renovate-config.yaml)

This repository contains a config for [Renovate](https://docs.renovatebot.com).
It is designed for https://github.com/int128/typescript-action.


## Features
- Enable automerge (except major update)
- Group dependencies
  - `jest`
  - `eslint`
- Set `@types/node` version to 16
- Update `using` node version in `action.yaml`


## Getting Started

Create `renovate.json5` as follows:

```json5
{
  "extends": [
    "config:base",
    "github>int128/typescript-action-renovate-config",
  ],
}
```
