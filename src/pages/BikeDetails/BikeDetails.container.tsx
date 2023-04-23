import { useLocation } from 'react-router-dom'
import BikeDetails from './BikeDetails.component'
import { useRentBike } from './BikeDetails.utils'
import Bike from 'models/Bike'
import { useEffect, useState } from 'react'

type StateReceived = {
  bike: Bike
}

const BikeDetailsContainer = () => {
  const { state } = useLocation()
  const { booked, isLoading, onSubmit } = useRentBike()
  const [currentBikeData, setCurrentBikeData] = useState<Bike>()

  useEffect(() => {
    if (state) {
      const { bike } = state as StateReceived
      setCurrentBikeData(bike)
    }
  }, [])

  return (
    <BikeDetails bike={currentBikeData} booked={booked} isLoading={isLoading} onSubmit={onSubmit} />
  )
}

export default BikeDetailsContainer
