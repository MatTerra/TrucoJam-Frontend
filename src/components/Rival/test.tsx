import { render, screen } from '@testing-library/react'

import Rival from '.'

describe('<Rival />', () => {
  it('should render the heading', () => {
    const { container } = render(<Rival />)

    expect(screen.getByRole('heading', { name: /Rival/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
