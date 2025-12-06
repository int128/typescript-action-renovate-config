import assert from 'node:assert'

const main = async () => {
  console.info(`Test fixture for typescript-action-renovate-config`)
  assert(process.env.GITHUB_ACTION, 'GITHUB_ACTION must be set')
}

await main()
