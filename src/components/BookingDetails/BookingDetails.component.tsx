import { Fragment } from 'react'
import { Box, Divider, Typography, SwipeableDrawer, useMediaQuery } from '@mui/material'
import { Global } from '@emotion/react'
import theme from 'styles/theme'
import Bike from 'models/Bike'
import BikeImageSelector from 'components/BikeImageSelector'
import BookingAddressMap from 'components/BookingAddressMap'
import BikeSpecs from 'components/BikeSpecs'
import BikeType from 'components/BikeType'
import {
  Container,
  DetailsContainer,
  FavoriteIcon,
  Footer,
  ImageContainer,
  LikeButton,
  PriceRow,
  RentBikeButton,
} from './BookingDetails.styled'

interface BookingDetailsProps {
  bike?: Bike
  open?: boolean
  onToggle: () => void
}

const BookingDetails = ({ bike, open = true, onToggle }: BookingDetailsProps) => {
  const isOnMobile = useMediaQuery(theme.breakpoints.down('md'))

  const rateByDay = bike?.rate || 0
  const rateByWeek = rateByDay * 7

  const Wrapper = isOnMobile ? SwipeableDrawer : Fragment

  return (
    <Wrapper anchor='bottom' open={open} onClose={onToggle} onOpen={onToggle}>
      <Global
        styles={{
          '.MuiDrawer-paperAnchorBottom': {
            borderRadius: '30px 30px 0 0',
          },
        }}
      />
      <Container variant='outlined' data-testid='bike-details-container'>
        <ImageContainer>
          {!!bike?.imageUrls.length && <BikeImageSelector imageUrls={bike?.imageUrls} />}

          <BikeSpecs bodySize={bike?.bodySize} maxLoad={bike?.maxLoad} ratings={bike?.ratings} />
        </ImageContainer>

        <Divider />

        <DetailsContainer>
          <Box marginY={2.25}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <div>
                <Typography
                  variant='h1'
                  fontSize={38}
                  fontWeight={800}
                  marginBottom={0.5}
                  data-testid='bike-name-details'
                >
                  {bike?.name}
                </Typography>

                <BikeType type={bike?.type} data-testid='bike-type-details' />
              </div>

              <LikeButton className='BikeDetail__LikeButton'>
                <FavoriteIcon />
              </LikeButton>
            </Box>

            <Typography marginTop={1.5} fontSize={14}>
              {bike?.description}
            </Typography>
          </Box>

          <Divider />

          <Box marginY={2.25} data-testid='bike-prices-details'>
            <PriceRow>
              <Typography>Day</Typography>
              <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                {rateByDay} €
              </Typography>
            </PriceRow>

            <PriceRow>
              <Typography>Week</Typography>
              <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
                {rateByWeek} €
              </Typography>
            </PriceRow>
          </Box>

          <Divider />

          <Box marginTop={3.25}>
            <Typography variant='h1' fontSize={24} fontWeight={800}>
              Full adress after booking
            </Typography>

            <BookingAddressMap />
          </Box>
          <Footer>
            <LikeButton>
              <FavoriteIcon />
            </LikeButton>
            <RentBikeButton onClick={onToggle}>Rent Bike</RentBikeButton>
          </Footer>
        </DetailsContainer>
      </Container>
    </Wrapper>
  )
}

export default BookingDetails
