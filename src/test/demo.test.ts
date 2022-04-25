import { it, describe, expect, assert } from 'vitest'

describe('demo test', () => {
  it('test1', () => {
    expect(1 + 1).toEqual(2)
    expect(true).to.be.true
  })

  it('test2', () => {
    assert.equal(Math.sqrt(4), 2)
  })
})
