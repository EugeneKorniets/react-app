import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders app logo', () => {
  const { getByAltText }  = render(<App/>)
  const logo = getByAltText(/logo/i)
  expect(logo).toBeInTheDocument()
})
