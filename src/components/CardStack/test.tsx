import { render, screen } from '@testing-library/react'

import Stack from '.'

describe('<Stack />', () => {
  it('should render the heading', () => {
    const { container } = render(<Stack />)

    expect(screen.getByRole('heading', { name: /Stack/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
