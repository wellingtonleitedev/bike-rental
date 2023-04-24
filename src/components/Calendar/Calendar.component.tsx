import { Fragment } from 'react'
import { format } from 'date-fns'
import { Value } from 'react-calendar/dist/cjs/shared/types'
import { ChevronLeft, ChevronRight, DateRange } from '@mui/icons-material'
import { Box, SwipeableDrawer, Typography, useMediaQuery } from '@mui/material'
import { DATE_RANGE_LABEL_FORMAT, MONTH_DAY_FORMAT, WEEKDAYS_FORMAT } from './Calendar.constants'
import { DatePickerButton, Footer, SelectDateButton, StyledCalendar } from './Calendar.styled'
import NavigationLabel from './components/NavigationLabel'
import { formatCalendarDate } from './Calendar.util'
import { useDisclosure } from 'hooks'
import theme from 'styles/theme'

interface CalendarProps {
  initialDate?: Date | null
  finalDate?: Date | null
  onChange: (value: Value) => void
}

const Calendar = ({ initialDate, finalDate, ...props }: CalendarProps) => {
  const isOnMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { open, onToggle } = useDisclosure()

  const dateFrom = initialDate && format(initialDate, DATE_RANGE_LABEL_FORMAT)
  const dateTo = finalDate && format(finalDate, DATE_RANGE_LABEL_FORMAT)
  const showDateRangeLabel = dateFrom && dateTo

  const Container = isOnMobile
    ? ({ children }: { children: JSX.Element[] }) => (
        <SwipeableDrawer anchor='bottom' open={open} onClose={onToggle} onOpen={onToggle}>
          {children}
        </SwipeableDrawer>
      )
    : Fragment

  return (
    <Box marginBottom={1.25}>
      <Typography variant='h2' fontSize={24} padding={2.5} paddingBottom={1}>
        Select date and time
      </Typography>
      <DatePickerButton onClick={onToggle}>
        <DateRange />
        <Typography>
          {showDateRangeLabel ? `From ${dateFrom} to ${dateTo}` : 'Pick a date'}
        </Typography>
      </DatePickerButton>
      <Container>
        <StyledCalendar
          formatShortWeekday={formatCalendarDate(WEEKDAYS_FORMAT)}
          formatDay={formatCalendarDate(MONTH_DAY_FORMAT)}
          navigationLabel={NavigationLabel}
          prevLabel={<ChevronLeft data-testid='prev-month-button' />}
          nextLabel={<ChevronRight data-testid='next-month-button' />}
          minDate={new Date()}
          prev2Label={null}
          next2Label={null}
          locale='en-US'
          allowPartialRange
          selectRange
          {...props}
        />
        <Footer>
          <SelectDateButton onClick={onToggle}>Select</SelectDateButton>
        </Footer>
      </Container>
    </Box>
  )
}

export default Calendar
