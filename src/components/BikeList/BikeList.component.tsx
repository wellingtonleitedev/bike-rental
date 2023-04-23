import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Bike from 'models/Bike'
import { getQuantityLabel } from './BikeList.utils'
import BikeCard from 'components/BikeCard'
import { Container, ListContainer, QuantityContainer } from './BikeList.styles'
import { Paths } from 'routes/paths'

interface BikeListProps {
  bikes: Bike[]
}

const BikeList = ({ bikes }: BikeListProps) => {
  const navigate = useNavigate()
  const quantityLabel = getQuantityLabel(bikes.length)

  const handleOpenBikeDetails = (bike: Bike) => () => {
    navigate(Paths.BIKE_DETAILS, { state: { bike } })
  }

  return (
    <Container data-testid='bikes-list'>
      <QuantityContainer className='list-quantity-container'>
        <Typography color='primary.light' data-testid='list-quantity'>
          {quantityLabel}
        </Typography>
      </QuantityContainer>

      <ListContainer>
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} handleOpenBikeDetails={handleOpenBikeDetails(bike)} />
        ))}
      </ListContainer>
    </Container>
  )
}

export default BikeList
