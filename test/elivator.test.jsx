import { afterAll, afterEach, beforeAll, beforeEach, describe, test } from 'vitest'
import { start, stop } from './helpers/approval'
import { setupTimers } from './helpers/utils'
import { Sut } from './helpers/sut'
import Building from '../src/components/Building'
import { DOOR_CLOSE } from '../src/constants'

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

  test('pick me in lobby', async () => {
    await sut.verify('lobby-closed')
    await sut.press('LUP')
    await sut.verify('lobby-open')
    await sut.wait(DOOR_CLOSE)
    await sut.verify('lobby-closed')
  })
})
