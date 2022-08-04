import '@testing-library/jest-dom/extend-expect'

import { TextDecoder, TextEncoder } from 'util'

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder
  global.TextDecoder = TextDecoder
}
