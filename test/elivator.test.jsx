import { render } from '@testing-library/react'
import { beforeEach, expect, test } from 'vitest'
import Building from '../src/components/Building'

let sut

beforeEach(() => {
  const { container } = render(<Building floors={4} carPosition={0} />)
  sut = container.firstChild
})

test('its in the lobby', () => {
  expect(sut).toMatchSnapshot("lobby")
})
