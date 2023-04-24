import { render, screen } from '@testing-library/react'
import Loading from './Loading.component'

describe('Loading component', () => {
  it('should render one Loading Skeleton', () => {
    render(<Loading />)

    const skeleton = screen.getByTestId('loading-skeleton')
    expect(skeleton).toBeInTheDocument()
  })

  it.each([2, 3])('should render one Loading Skeleton', (quantity) => {
    render(<Loading quantity={quantity} />)

    const skeleton = screen.getAllByTestId('loading-skeleton')
    expect(skeleton.length).toBe(quantity)
  })
})
