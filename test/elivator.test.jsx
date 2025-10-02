import { afterAll, beforeAll, expect, test } from 'vitest'
import puppeteer from 'puppeteer'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

expect.extend({ toMatchImageSnapshot })

let browser
let page

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true })
  page = await browser.newPage()
  await page.goto('http://localhost:5173')
})

afterAll(async () => {
  await browser.close()
})

test('its in the lobby', async () => {
  const screenshot = await page.screenshot()
  expect(screenshot).toMatchImageSnapshot({ customSnapshotIdentifier: 'lobby' })
})
