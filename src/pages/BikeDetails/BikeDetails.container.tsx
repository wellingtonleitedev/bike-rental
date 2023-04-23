import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BikeDetails from './BikeDetails.component'
import { useRentBike } from './BikeDetails.utils'
import { Paths } from 'routes/paths'

const BikeDetailsContainer = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const { booked, isLoading, onSubmit } = useRentBike()

  useEffect(() => {
    if (!state?.bike) {
      navigate(Paths.HOME)
    }
  }, [])

  return <BikeDetails bike={state.bike} booked={booked} isLoading={isLoading} onSubmit={onSubmit} />
}

export default BikeDetailsContainer
