import test from 'node:test'
import assert from 'node:assert/strict'
import { validateDestination } from './redirects.mjs'

test('accepts the Meesho store', () => {
  assert.equal(validateDestination('https://meesho.com/MAHIKAESHOP'), 'https://meesho.com/MAHIKAESHOP')
})
for (const bad of [
  'http://meesho.com/x', 'javascript:alert(1)', 'https://evil.com/x',
  'https://meesho.com.evil.io/x', 'https://user:pw@meesho.com/x', '', '[FLIPKART_STORE_URL]', null,
]) {
  test(`rejects ${bad}`, () => assert.equal(validateDestination(bad), null))
}
