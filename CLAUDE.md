# Elivator - Visual Approval Testing for React

## What

Elevator kata (https://kata-log.rocks/lift-kata) using visual approval testing. Code behaviors until screenshots match expectations.

## Why

Snapshots let AI see what it's building. Iterate autonomously: code → test → look at diff → fix or approve.

## Stack

- React (Vite) + Vitest
- Puppeteer (screenshots only)
- @testing-library/react (DOM interaction)

## Test Pattern

`sut` = testing-library container. Use it for DOM queries and events.
`verify(sut, 'name')` = screenshot and compare. Call multiple times per test.

## Workflow

1. Code change
2. `npm test` - see diff in `__diff_output__/`
3. Read the diff image
4. Diff matches intent? Update snapshot, keep going
5. Diff wrong? Fix and goto 2
6. Unsure? Ask user to review diff

## Approval

When diff looks correct, you update the snapshot. Only ask user when genuinely unsure or stuck.

## Rules

- Components: no logic, just props → render
- CSS: separate files in css/
- Always look at diff before approving
