import { render, screen } from '@testing-library/react'
import { mockedBike } from 'mocks/Bike'
import BikeCard from '.'
import userEvent from '@testing-library/user-event'

describe('BikeCard component', () => {
  const mocKOnClick = jest.fn()

  beforeEach(() => {
    render(<BikeCard bike={mockedBike} handleOpenBikeDetails={mocKOnClick} />)
  })

  it('should has an image', () => {
    const imageElement = screen.getByTestId('bike-image')
    expect(imageElement).toBeInTheDocument()
  })

  it('should has the bike name', () => {
    const nameElement = screen.getByTestId('bike-name')
    expect(nameElement).toBeInTheDocument()
  })

  it('should has type and price by day in the footer', () => {
    const footerContainer = screen.getByTestId('card-footer')
    expect(footerContainer).toBeInTheDocument()

    const typeElement = screen.getByTestId('bike-type')
    expect(typeElement).toBeInTheDocument()

    const priceByDayElement = screen.getByTestId('bike-price-day')
    expect(priceByDayElement).toBeInTheDocument()
  })

  it('should call a function when click on the card', () => {
    const cardElement = screen.getByTestId('bike-type')
    userEvent.click(cardElement)

    expect(mocKOnClick).toHaveBeenCalled()
  })
})
