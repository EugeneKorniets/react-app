import React from 'react'
import { render } from '@testing-library/react'
import Board from './Board'

test('renders board title', () => {
  const { getByText } = render(<Board/>)
  const title = getByText(/board/i)
  expect(title).toBeInTheDocument()
})
