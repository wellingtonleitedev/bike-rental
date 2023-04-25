import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import BikeDetails from './BikeDetails.component'
import { errorHandler } from 'utils'
import { rentBike } from 'services'
import Bike from 'models/Bike'

type StateReceived = {
  bike: Bike
}

const BikeDetailsContainer = () => {
  const { state } = useLocation()
  const queryClient = useQueryClient()
  const { data, isLoading, mutateAsync } = useMutation({
    mutationFn: rentBike,
    onError: errorHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bikes'] })
    },
  })

  const [currentBikeData, setCurrentBikeData] = useState<Bike>()

  useEffect(() => {
    if (state) {
      const { bike } = state as StateReceived
      setCurrentBikeData(bike)
    }
  }, [])

  return (
    <BikeDetails
      bike={currentBikeData}
      booked={data}
      isLoading={isLoading}
      onSubmit={mutateAsync}
    />
  )
}

export default BikeDetailsContainer
