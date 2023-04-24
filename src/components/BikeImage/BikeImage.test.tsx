import { render, screen } from '@testing-library/react'
import BikeImage from './BikeImage.component'
import { mockedBike } from 'mocks/Bike'

describe('BikeImage component', () => {
  beforeEach(() => {
    render(<BikeImage src={mockedBike?.imageUrls[0]} isLoaded />)
  })

  it('should be able to render the image', () => {
    const imageElement = screen.getByRole('img')

    expect(imageElement).toBeInTheDocument()
    expect(imageElement.getAttribute('src')).toEqual(mockedBike.imageUrls[0])
  })
})
