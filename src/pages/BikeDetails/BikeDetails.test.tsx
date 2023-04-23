import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import BikeDetails from './BikeDetails.component'
import { mockedBike } from 'mocks/Bike'

const todaysFakeDate = new Date('2023-04-20T10:00:00')

describe('BikeDetails page', () => {
  const mockSubmit = jest.fn()

  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(todaysFakeDate)

    render(
      <BrowserRouter>
        <BikeDetails bike={mockedBike} onSubmit={mockSubmit} />
      </BrowserRouter>,
    )
  })

  it('should has a header', () => {
    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
  })

  it('should has breadcrumbs', () => {
    const breadcrumbsElement = screen.getByTestId('bike-details-breadcrumbs')
    expect(breadcrumbsElement).toBeInTheDocument()
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

  it('should has all the amounts as zero due not pick a date range', () => {
    const allAmounts = screen.getAllByText(/0,00/)

    expect(allAmounts.length).toEqual(3)
  })

  it('should not be able to book due not pick a date range', () => {
    const bookingButtonElement = screen.getByTestId('bike-booking-button')

    expect(bookingButtonElement).toBeDisabled()
  })

  it('should be able to book after pick a date range', async () => {
    const startDateButton = screen.getByRole('button', { name: 'April 21, 2023' })
    const endDateButton = screen.getByRole('button', { name: 'April 23, 2023' })

    userEvent.click(startDateButton)
    userEvent.click(endDateButton)

    const bookingButton = screen.getByTestId('bike-booking-button')
    await waitFor(async () => userEvent.click(bookingButton))
    expect(mockSubmit).toBeCalled()
  })
})
