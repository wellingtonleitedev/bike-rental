import { useState } from 'react'
import { errorHandler } from 'utils'
import apiClient from 'services/api'
import { RentBikeProps, RentBikeResponse } from 'types/bike.types'
import { BOILERPLATE_USER_ID } from 'config'
import { formatISO } from 'date-fns'

export const useRentBike = () => {
  const [booked, setBooked] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const onSubmit = async ({ bikeId, dateRange }: RentBikeProps) => {
    setLoading(true)

    try {
      const [dateFrom, dateTo] = dateRange

      if (!dateFrom || !dateTo) {
        throw new Error('You need to choose the rent date')
      }

      const { data } = await apiClient.post<RentBikeResponse>('/bikes/rent', {
        bikeId,
        userId: Number(BOILERPLATE_USER_ID),
        dateFrom: formatISO(dateFrom, { representation: 'date' }),
        dateTo: formatISO(dateTo, { representation: 'date' }),
      })

      setBooked(true)

      return data
    } catch (error) {
      errorHandler(error)
    } finally {
      setLoading(false)
    }
  }

  return { booked, isLoading, onSubmit }
}
