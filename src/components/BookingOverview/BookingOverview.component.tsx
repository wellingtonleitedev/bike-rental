import { useState } from 'react'
import { UseMutateAsyncFunction } from '@tanstack/react-query'
import { Value } from 'react-calendar/dist/cjs/shared/types'
import { Box, Divider, Modal, Typography, useMediaQuery } from '@mui/material'
import { RentBikeProps, RentBikeResponse, TDateRange } from 'types/bike.types'
import { formatAmount, getServicesFee, getSubtotal } from './BookingOverview.utils'
import BookingSuccess from './components/BookingSuccess'
import Calendar from 'components/Calendar'
import BikeCard from 'components/BikeCard'
import Bike from 'models/Bike'
import theme from 'styles/theme'
import {
  BookingButton,
  InfoIcon,
  ModalContent,
  OverviewContainer,
  PriceRow,
} from './BookingOverview.styled'

export interface BookingOverviewProps {
  bike?: Bike
  booked?: boolean
  isLoading?: boolean
  onToggle: () => void
  onSubmit: UseMutateAsyncFunction<RentBikeResponse, unknown, RentBikeProps>
}

const BookingOverview = ({
  bike,
  booked = false,
  isLoading = false,
  onToggle,
  onSubmit,
}: BookingOverviewProps) => {
  const isOnMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [dateRange, setDateRange] = useState<TDateRange>([null, null])

  const subtotal = getSubtotal(dateRange, bike?.rate || 0)
  const servicesFee = getServicesFee(subtotal)
  const total = subtotal + servicesFee

  const onChange = (dates: Value) => setDateRange(dates as TDateRange)

  const [inititalDate, finalDate] = dateRange
  return (
    <OverviewContainer variant='outlined' data-testid='bike-overview-container'>
      {!isOnMobile && booked ? (
        <BookingSuccess bike={bike} />
      ) : (
        <>
          {bike && <BikeCard bike={bike} changeOnMobile handleOpenBikeDetails={onToggle} />}
          <Calendar onChange={onChange} initialDate={inititalDate} finalDate={finalDate} />
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
              disabled={!total || isLoading || booked}
              onClick={() => onSubmit({ bikeId: bike?.id || 0, dateRange })}
            >
              Add to booking
            </BookingButton>
          </Box>
          <Modal open={booked}>
            <ModalContent>
              <BookingSuccess bike={bike} />
            </ModalContent>
          </Modal>
        </>
      )}
    </OverviewContainer>
  )
}

export default BookingOverview
