import { Typography } from '@mui/material'
import BikeImage from 'components/BikeImage'
import BikeType from 'components/BikeType'
import Bike from 'models/Bike'
import { Container, ImageBox } from './BookingSuccess.styled'

interface BikeDetailsProps {
  bike?: Bike
}

const BookingSuccess = ({ bike }: BikeDetailsProps) => (
  <Container>
    <Typography variant='h2' fontSize={24}>
      Thank you!
    </Typography>
    <Typography marginY={2.5}>Your bike is booked.</Typography>
    <ImageBox>
      <BikeImage src={bike?.imageUrls[0]} data-testid='bike-image' isLoaded />
    </ImageBox>
    <Typography variant='h3' fontSize={18} fontWeight={700} marginY={[2, 1]}>
      {bike?.name}
    </Typography>
    <BikeType type={bike?.type} />
  </Container>
)

export default BookingSuccess
