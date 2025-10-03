import { render, act } from '@testing-library/react'
import { vi } from 'vitest'
import { verify } from './approval'

async function press(container, testid) {
  const button = container.querySelector(`[data-testid="${testid}"]`)
  await act(async () => {
    button.click()
  })
}

async function fww(seconds) {
  await act(async () => {
    await vi.advanceTimersByTimeAsync(seconds * 1000)
    await vi.advanceTimersByTimeAsync(100)
  })
}

export async function Sut(Component, props) {
  let container

  await act(async () => {
    const rendered = render(<Component {...props} />)
    container = rendered.container
  })

  return {
    container,
    verify(snapshot) {
      return verify(container, snapshot).then(() => this)
    },
    press(buttonId) {
      return press(container, buttonId).then(() => this)
    },
    wait(seconds) {
      return fww(seconds).then(() => this)
    }
  }
}
