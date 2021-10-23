import { render, screen } from '@testing-library/react'

import Hand from '.'

describe('<Hand />', () => {
  it('should render the heading', () => {
    const { container } = render(<Hand />)

    expect(screen.getByRole('heading', { name: /Hand/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
