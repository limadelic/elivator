import { act } from '@testing-library/react'
import { vi } from 'vitest'

export function setupTimers() {
  return {
    beforeEach: () => {
      vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] })
    },
    afterEach: () => {
      vi.useRealTimers()
    }
  }
}

export async function press(sut, testid) {
  const button = sut.querySelector(`[data-testid="${testid}"]`)
  await act(async () => {
    button.click()
  })
}

export async function fww(seconds) {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(seconds * 1000)
  })
}
