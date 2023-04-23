import { useState } from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { Value } from 'react-calendar/dist/cjs/shared/types'
import Bike from 'models/Bike'
import Calendar from 'components/Calendar'
import BookingSuccess from './components/BookingSuccess'
import { RentBikeProps, RentBikeResponse, TDateRange } from 'types/bike.types'
import { formatAmount, getServicesFee, getSubtotal } from './BookingOverview.utils'
import { BookingButton, InfoIcon, OverviewContainer, PriceRow } from './BookingOverview.styled'

export interface BookingOverviewProps {
  bike: Bike
  booked?: boolean
  isLoading?: boolean
  onSubmit: (data: RentBikeProps) => Promise<RentBikeResponse | undefined>
}

const BookingOverview = ({
  bike,
  booked = false,
  isLoading = false,
  onSubmit,
}: BookingOverviewProps) => {
  const [dateRange, setDateRange] = useState<TDateRange>([null, null])

  const subtotal = getSubtotal(dateRange, bike.rate)
  const servicesFee = getServicesFee(subtotal)
  const total = subtotal + servicesFee

  const onChange = (dates: Value) => setDateRange(dates as TDateRange)

  return (
    <OverviewContainer variant='outlined' data-testid='bike-overview-container'>
      {!booked ? (
        <>
          <Calendar onChange={onChange} />
          <Box padding={2.5}>
            <Typography variant='h2' fontSize={16} marginBottom={1.25}>
              Booking Overview
            </Typography>

            <Divider />

            <PriceRow marginTop={1.75} data-testid='bike-overview-single-price'>
              <Box display='flex' alignItems='center'>
                <Typography marginRight={1}>Subtotal</Typography>
                <InfoIcon fontSize='small' />
              </Box>

              <Typography>{formatAmount(subtotal)}</Typography>
            </PriceRow>

            <PriceRow marginTop={1.5} data-testid='bike-overview-single-price'>
              <Box display='flex' alignItems='center'>
                <Typography marginRight={1}>Service Fee</Typography>
                <InfoIcon fontSize='small' />
              </Box>

              <Typography>{formatAmount(servicesFee)}</Typography>
            </PriceRow>

            <PriceRow marginTop={1.75} data-testid='bike-overview-total'>
              <Typography fontWeight={800} fontSize={16}>
                Total
              </Typography>
              <Typography variant='h2' fontSize={24} letterSpacing={1}>
                {formatAmount(total)}
              </Typography>
            </PriceRow>

            <BookingButton
              fullWidth
              disableElevation
              variant='contained'
              data-testid='bike-booking-button'
              disabled={!total || isLoading}
              onClick={() => onSubmit({ bikeId: bike.id, dateRange })}
            >
              Add to booking
            </BookingButton>
          </Box>
        </>
      ) : (
        <BookingSuccess bike={bike} />
      )}
    </OverviewContainer>
  )
}

export default BookingOverview
