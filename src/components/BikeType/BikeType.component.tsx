import { Chip, ChipProps } from '@mui/material'

interface BikeTypeProps extends ChipProps {
  type?: string
}

const BikeType = ({ type, ...props }: BikeTypeProps) => {
  return <Chip color='secondary' label={type} {...props} />
}

export default BikeType
