import { afterAll, afterEach, beforeAll, beforeEach, describe, test } from 'vitest'
import { start, stop } from './helpers/approval'
import { setupTimers } from './helpers/utils'
import { Sut } from './helpers/sut'
import Building from '../src/components/Building'
import { DOOR_CLOSE, FLOOR_TRAVEL } from '../src/constants'

describe('elivator', () => {
  let sut
  const timers = setupTimers()

  beforeAll(async () => {
    await start()
  })

  afterAll(async () => {
    await stop()
  })

  beforeEach(async () => {
    timers.beforeEach()
    sut = await Sut(Building, { floors: 4 })
  })

  afterEach(() => {
    timers.afterEach()
  })

  test('from lobby to penthouse', async () => {
    await sut.verify('at-lobby-closed')
    await sut.press('LUP')
    await sut.verify('at-lobby-open')
    await sut.press('PH')
    await sut.verify('at-lobby-open-penthouse-selected')
    await sut.wait(DOOR_CLOSE + FLOOR_TRAVEL * 3)
    await sut.verify('at-penthouse-open')
    await sut.wait(DOOR_CLOSE)
    await sut.verify('at-penthouse-closed')
  })
})
