import React from 'react'
import { render } from '@testing-library/react'
import Game from './Game'

test('renders game title', () => {
  const { getByText } = render(<Game/>)
  const title = getByText(/tic tac toe/i)
  expect(title).toBeInTheDocument()
})
