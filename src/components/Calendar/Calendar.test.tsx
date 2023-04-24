import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MONTH_DAY_FORMAT, WEEKDAYS_FORMAT } from './Calendar.constants'
import { formatCalendarDate } from './Calendar.util'
import Calendar from './Calendar.component'

const daysBeforeCurrentyDate = [10, 15, 19]

describe('Calendar component', () => {
  const mockOnChange = jest.fn()

  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2023-04-20T10:00:00'))
    render(<Calendar onChange={mockOnChange} />)
  })

  it('should have the today date with the now className', () => {
    const todayButtonLabel = 'April 20, 2023'
    const todayButton = screen.getByRole('button', { name: todayButtonLabel })

    expect(todayButton.className).toContain('react-calendar__tile--now')
  })

  it('should showing the currenty month', () => {
    const monthLabel = screen.getByText(/april/i)

    expect(monthLabel).toBeInTheDocument()
  })

  it.each(daysBeforeCurrentyDate)('should not be able to choose a date in the past', (days) => {
    const buttonName = `April ${days}, 2023`
    const yesterdayButton = screen.getByRole('button', { name: buttonName })
    const [prevButton] = screen.getAllByRole('button', { name: '' })

    expect(prevButton).toBeDisabled()
    expect(yesterdayButton).toBeDisabled()
  })

  it('should be able to navigate through the months by prev and next button', () => {
    const prevButton = screen.getByTestId('prev-month-button')
    const nextButton = screen.getByTestId('next-month-button')

    userEvent.click(nextButton)
    expect(screen.getByText(/may/i)).toBeInTheDocument()

    userEvent.click(prevButton)
    expect(screen.getByText(/april/i)).toBeInTheDocument()
  })

  it('should be able to choose a date range', () => {
    const startDate = screen.getByRole('button', { name: 'April 21, 2023' })
    const middleDate = screen.getByRole('button', { name: 'April 22, 2023' })
    const endDate = screen.getByRole('button', { name: 'April 23, 2023' })

    userEvent.click(startDate)
    userEvent.click(endDate)

    expect(startDate.className).toContain('react-calendar__tile--rangeStart')
    expect(middleDate.className).toContain('react-calendar__tile--range')
    expect(endDate.className).toContain('react-calendar__tile--rangeEnd')
    expect(mockOnChange).toHaveBeenCalled()
  })
})

describe('Calendar Util', () => {
  it('should be able to format a date according to the format type', () => {
    jest.useFakeTimers().setSystemTime(new Date('2023-04-06T10:00:00'))

    expect(formatCalendarDate(WEEKDAYS_FORMAT)('en-US', new Date())).toEqual('Th')
    expect(formatCalendarDate(MONTH_DAY_FORMAT)('en-US', new Date())).toEqual('06')
  })
})
