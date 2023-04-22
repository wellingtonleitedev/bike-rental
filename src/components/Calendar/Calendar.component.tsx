import { Box, Typography } from '@mui/material'
import { Value } from 'react-calendar/dist/cjs/shared/types'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import NavigationLabel from './components/NavigationLabel'
import { StyledCalendar } from './Calendar.styled'
import { formatCalendarDate } from './Calendar.util'

interface CalendarProps {
  onChange: (value: Value) => void
}

const WEEKDAYS_FORMAT_TYPE = 'eeeeee' // Su, Mo...
const MONTH_DAY_FORMAT_TYPE = 'dd' // 01, 02...

const Calendar = ({ ...props }: CalendarProps) => {
  const todaysDate = new Date()

  return (
    <Box marginBottom={1.25}>
      <Typography variant='h2' fontSize={24} padding={2.5} paddingBottom={1}>
        Select date and time
      </Typography>
      <StyledCalendar
        formatShortWeekday={formatCalendarDate(WEEKDAYS_FORMAT_TYPE)}
        formatDay={formatCalendarDate(MONTH_DAY_FORMAT_TYPE)}
        navigationLabel={NavigationLabel}
        prevLabel={<ChevronLeft data-testid='prev-month-button' />}
        nextLabel={<ChevronRight data-testid='next-month-button' />}
        minDate={todaysDate}
        prev2Label={null}
        next2Label={null}
        locale='en-US'
        allowPartialRange
        selectRange
        {...props}
      />
    </Box>
  )
}

export default Calendar
