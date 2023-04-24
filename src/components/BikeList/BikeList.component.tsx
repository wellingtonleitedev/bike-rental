import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Container, ListContainer, QuantityContainer } from './BikeList.styles'
import { getQuantityLabel } from './BikeList.utils'
import BikeCard from 'components/BikeCard'
import Loading from 'components/Loading'
import { Paths } from 'routes/paths'
import Bike from 'models/Bike'

interface BikeListProps {
  bikes: Bike[]
  isLoading: boolean
}

const BikeList = ({ bikes, isLoading }: BikeListProps) => {
  const quantityLabel = getQuantityLabel(!isLoading ? bikes.length : 0)
  const navigate = useNavigate()

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
        {isLoading ? (
          <Loading quantity={6} variant='rectangular' height={300} />
        ) : (
          bikes.map((bike) => (
            <BikeCard
              key={bike.id}
              bike={bike}
              handleOpenBikeDetails={handleOpenBikeDetails(bike)}
            />
          ))
        )}
      </ListContainer>
    </Container>
  )
}

export default BikeList
