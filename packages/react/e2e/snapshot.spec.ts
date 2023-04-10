import { test, expect } from '@playwright/test'
import fetch from 'sync-fetch'

const TESTABLE_CATEGORIES = ['Feedback', 'Forms', 'Layout', 'Typography']

const url = 'http://localhost:61000/exo-ui'

const stories = fetch(`${url}/meta.json`).json().stories
const testableStories = Object.entries(stories)
  .filter(([, meta]: any) => TESTABLE_CATEGORIES.includes(meta?.levels?.[0]))
  .map(([name]) => name)

testableStories.forEach((storyKey) => {
  test(`${storyKey} - compare snapshots`, async ({ page }) => {
    await page.goto(`${url}/?story=${storyKey}&mode=preview`)
    await page.waitForSelector('[data-storyloaded]')
    await expect(page).toHaveScreenshot(`${storyKey}.png`, { maxDiffPixelRatio: 0.1 })
  })
})
