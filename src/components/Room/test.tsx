import { render, screen } from '@testing-library/react'

import Room from '.'

describe('<Room />', () => {
  it('should render the heading', () => {
    const { container } = render(<Room />)

    expect(screen.getByRole('heading', { name: /Room/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
