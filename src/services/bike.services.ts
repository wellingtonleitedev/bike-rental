import { BOILERPLATE_USER_ID } from 'config'
import apiClient from './api'
import { formatISO } from 'date-fns'
import { RentBikeProps, RentBikeResponse } from 'types/bike.types'

export const getBikes = async () => {
  const { data } = await apiClient.get('/bikes')

  return data
}

export const rentBike = async ({ bikeId, dateRange }: RentBikeProps): Promise<RentBikeResponse> => {
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

  return data
}
