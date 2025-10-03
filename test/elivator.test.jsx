import { render, act } from '@testing-library/react'
import { afterAll, beforeAll, beforeEach, describe, test } from 'vitest'
import { start, stop, verify } from './approval'
import Building from '../src/components/Building'

describe('elivator', () => {
  let sut

  beforeAll(async () => {
    await start()
  })

  afterAll(async () => {
    await stop()
  })

  beforeEach(async () => {
    await act(async () => {
      const { container } = render(<Building floors={4} carPosition={0} />)
      sut = container
    })
  })

  test('its in the lobby', async () => {
    await verify(sut, 'lobby')
  })

  test('open doors', async () => {
    await verify(sut, 'open-doors')
  })
})
