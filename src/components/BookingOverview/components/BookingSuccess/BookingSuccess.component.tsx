import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import BikeImage from 'components/BikeImage'
import BikeType from 'components/BikeType'
import { Paths } from 'routes/paths'
import Bike from 'models/Bike'
import { Container, GoBackButton, ImageBox } from './BookingSuccess.styled'

interface BikeDetailsProps {
  bike?: Bike
}

const BookingSuccess = ({ bike }: BikeDetailsProps) => {
  const navigate = useNavigate()

  return (
    <Container>
      <Typography variant='h2' fontSize={24}>
        Thank you!
      </Typography>
      <Typography marginY={2.5}>Your bike is booked.</Typography>
      <ImageBox>
        <BikeImage src={bike?.imageUrls[0]} data-testid='bike-booked-image' isLoaded />
      </ImageBox>
      <Typography
        variant='h3'
        fontSize={18}
        fontWeight={700}
        marginY={[2, 1]}
        textAlign='center'
        data-testid='bike-booked-name'
      >
        {bike?.name}
      </Typography>
      <BikeType type={bike?.type} data-testid='bike-booked-type' />
      <GoBackButton onClick={() => navigate(Paths.HOME)}>Go to Home Page</GoBackButton>
    </Container>
  )
}

export default BookingSuccess
