import { differenceInDays } from 'date-fns'
import { TDateRange } from 'types/bike.types'
import { SERVICE_FEE_PERCENTAGE } from './BookingOverview.constants'

export const getServicesFee = (amount: number): number => amount * SERVICE_FEE_PERCENTAGE

export const getSubtotal = (dates: TDateRange, rateByDay: number): number => {
  const [startDate, endDate] = dates

  if (!endDate || !startDate) {
    return 0
  }

  const rentDays = differenceInDays(endDate, startDate) || 1

  return rentDays * rateByDay
}

export const formatAmount = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount)

  return formattedAmount
}
