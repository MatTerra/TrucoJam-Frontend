import { render, screen } from '@testing-library/react'

import MenuCard from '.'

describe('<MenuCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<MenuCard />)

    expect(screen.getByRole('heading', { name: /MenuCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
