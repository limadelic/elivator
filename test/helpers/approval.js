import { expect } from 'vitest'
import puppeteer from 'puppeteer'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

expect.extend({ toMatchImageSnapshot })

let browser
let page

export async function start() {
  browser = await puppeteer.launch({ headless: true })
  page = await browser.newPage()
}

export async function stop() {
  await browser.close()
}

export async function verify(sut, name) {
  const html = sut.innerHTML
  await page.setContent(`
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="http://localhost:5173/src/index.css">
        <link rel="stylesheet" href="http://localhost:5173/src/styles.css">
      </head>
      <body>${html}</body>
    </html>
  `)
  await page.waitForNetworkIdle()
  const screenshot = await page.screenshot()
  expect(screenshot).toMatchImageSnapshot({ customSnapshotIdentifier: name })
}
