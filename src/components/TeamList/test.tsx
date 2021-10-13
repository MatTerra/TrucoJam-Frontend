import { render, screen } from '@testing-library/react'

import TeamList from '.'

describe('<TeamList />', () => {
  it('should render the heading', () => {
    const { container } = render(<TeamList />)

    expect(screen.getByRole('heading', { name: /TeamList/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
