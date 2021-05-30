import React from 'react'
import { render, screen} from '@testing-library/react'
import 'jest-styled-components'
import App from '../App'

it('renders title', () => {
    render(<App />)
    const linkElement = screen.getByText(/Albums/i)
    expect(linkElement).toBeInTheDocument()
})

describe('Navigation Button - Home', () => {
    it('renders correctly', () => {
        render(<App />)
        const linkElement = screen.getByText(/Home/i)
        expect(linkElement).toBeInTheDocument()
    })
})

