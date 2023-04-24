import { render, screen } from '@testing-library/react'
import BookingDetails from './BookingDetails.component'
import { mockedBike } from 'mocks/Bike'

describe('BookingDetails component', () => {
  const mockOnToggle = jest.fn()

  beforeEach(() => {
    render(<BookingDetails bike={mockedBike} onToggle={mockOnToggle} />)
  })

  it('should has the details container with the image selector, bike name, prices and a map', () => {
    const detailsContainerElement = screen.getByTestId('bike-details-container')
    expect(detailsContainerElement).toBeInTheDocument()

    const imageSelectorElement = screen.getByTestId('bike-image-selector')
    expect(imageSelectorElement).toBeInTheDocument()

    const nameElement = screen.getByTestId('bike-name-details')
    expect(nameElement).toBeInTheDocument()

    const pricesElement = screen.getByTestId('bike-prices-details')
    expect(pricesElement).toBeInTheDocument()

    const mapElement = screen.getByTestId('booking-address-map')
    expect(mapElement).toBeInTheDocument()
  })
})
