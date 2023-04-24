import styled from '@emotion/styled'
import { BoxProps } from '@mui/material'

interface BikeImageProps extends BoxProps {
  isLoaded: boolean
}

export const Image = styled('img', {
  shouldForwardProp: (prop) => prop !== 'isLoaded',
})<BikeImageProps>(({ isLoaded }) => ({
  display: isLoaded ? 'block' : 'none',
}))
