type TDateRangeValue = Date | null
export type TDateRange = [TDateRangeValue, TDateRangeValue]

export interface RentBikeProps {
  bikeId: number
  dateRange: TDateRange
}

export interface RentBikeResponse {
  rentAmount: number
  fee: number
  totalAmount: number
}
