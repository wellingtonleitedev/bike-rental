import { format } from 'date-fns'

export const formatCalendarDate = (formatType: string) => (_: string | undefined, date: Date) =>
  format(date, formatType)
