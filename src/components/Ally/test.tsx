import { render, screen } from '@testing-library/react'

import Ally from '.'

describe('<Ally />', () => {
  it('should render the heading', () => {
    const { container } = render(<Ally />)

    expect(screen.getByRole('heading', { name: /Ally/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
