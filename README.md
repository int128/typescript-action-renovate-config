# typescript-action-renovate-config [![validate](https://github.com/int128/typescript-action-renovate-config/actions/workflows/validate.yaml/badge.svg)](https://github.com/int128/typescript-action-renovate-config/actions/workflows/validate.yaml)

This repository contains a config for [Renovate](https://docs.renovatebot.com).
It is designed for https://github.com/int128/typescript-action.


## Features
- Enable automerge of test packages
- Enable automerge of lint packages
- Restrict `@types/node`
- Update `using` node version in `action.yaml`

## Getting Started

Create `renovate.json5` as follows:

```json5
{
  "extends": [
    "config:base",
    ":automergeMinor",
    "github>int128/typescript-action-renovate-config",
  ],
}
```
