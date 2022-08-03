import { screen, render, RenderResult } from '@testing-library/react'
import { Input } from './index'

describe('Input', () => {
  let renderResult: RenderResult
  beforeEach(() => {
    renderResult = render(<Input id='username' label='Username' />)
  })
  afterEach(() => {
    renderResult.unmount()
  })
  it('should be empty in input on initial render', () => {
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement
    expect(inputNode.value).toBe('')
  })
})
