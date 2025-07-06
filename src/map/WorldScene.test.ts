import { describe, it, expect } from 'vitest'

// 基本的なTypeScript/Node.jsテスト
describe('Basic Tests', () => {
  it('should run basic math operations', () => {
    expect(2 + 2).toBe(4)
  })

  it('should handle string operations', () => {
    const greeting = 'Hello Syntheos Saga'
    expect(greeting).toContain('Syntheos')
  })

  it('should verify tile size constant', () => {
    const tileSize = 32
    expect(tileSize).toBe(32)
    expect(tileSize).toBeGreaterThan(0)
  })
}) 