import React from 'react'
import { render } from '@testing-library/react'
import Square from './Square'

test('renders square button', () => {
  const { getByText } = render(<Square/>)
  const button = getByText(/button/i)
  expect(button).toBeInTheDocument()
})
