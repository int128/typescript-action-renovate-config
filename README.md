# typescript-action-renovate-config [![validate](https://github.com/int128/typescript-action-renovate-config/actions/workflows/validate.yaml/badge.svg)](https://github.com/int128/typescript-action-renovate-config/actions/workflows/validate.yaml)

This repository contains a config for [Renovate](https://docs.renovatebot.com).
It is designed for https://github.com/int128/typescript-action.


## Features
- Enable automerge
  - All updates of minor, patch and pin
  - `jest` (including major)
  - `eslint` (including major)
- Group dependencies
  - `jest`
  - `eslint`
- Update `@types/node` to 16.x
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
