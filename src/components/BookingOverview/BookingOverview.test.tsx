import { render, screen } from '@testing-library/react'
import BookingOverview from './BookingOverview.component'
import { mockedBike } from 'mocks/Bike'
import { getServicesFee, getSubtotal } from './BookingOverview.utils'
import { SERVICE_FEE_PERCENTAGE } from './BookingOverview.constants'
import { addDays } from 'date-fns'

describe('BookingOverview component', () => {
  const mockSubmit = jest.fn()

  beforeEach(() => {
    render(<BookingOverview bike={mockedBike} onSubmit={mockSubmit} />)
  })

  it('should has the overview container with the prices, total and booking button', () => {
    const overviewContainerElement = screen.getByTestId('bike-overview-container')
    expect(overviewContainerElement).toBeInTheDocument()

    const pricesElements = screen.getAllByTestId('bike-overview-single-price')
    expect(pricesElements).not.toBeNull()
    expect(pricesElements.length).toBe(2)

    const totalElement = screen.getByTestId('bike-overview-total')
    expect(totalElement).toBeInTheDocument()

    const bookingButtonElement = screen.getByTestId('bike-booking-button')
    expect(bookingButtonElement).toBeInTheDocument()
  })

  it('should has the success messages', () => {
    render(<BookingOverview bike={mockedBike} booked onSubmit={mockSubmit} />)

    const thanksMessage = screen.getByText(/thank you/i)
    const bikeNameElement = screen.getByTestId('bike-booked-name')
    const bikeTypeElement = screen.getByTestId('bike-booked-type')
    const imageElement = screen.getByTestId('bike-booked-image')

    expect(thanksMessage).toBeInTheDocument()
    expect(bikeNameElement).toBeInTheDocument()
    expect(bikeTypeElement).toBeInTheDocument()
    expect(imageElement.getAttribute('src')).toEqual(mockedBike.imageUrls[0])
  })
})

describe('BikeDetails utils', () => {
  it('should gets the services fee properly', () => {
    const amount = 100
    const expectedAmount = amount * SERVICE_FEE_PERCENTAGE

    const result = getServicesFee(amount)
    expect(result).toEqual(expectedAmount)
  })

  it('should gets the subtotal properly', () => {
    const rentDays = 3
    const todaysFakeDate = new Date()
    const endFakeDate = addDays(todaysFakeDate, rentDays)

    const rateByDay = 100
    const expectedAmount = rateByDay * rentDays

    const result = getSubtotal([todaysFakeDate, endFakeDate], rateByDay)
    expect(result).toEqual(expectedAmount)
  })
})
