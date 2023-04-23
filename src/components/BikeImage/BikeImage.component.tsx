import { ImgHTMLAttributes } from 'react'
import { Image } from './BikeImage.styled'

interface BikeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  isLoaded: boolean
  onLoadStart?: () => void
  onLoad?: () => void
}

const BikeImage = ({ ...props }: BikeImageProps) => (
  <Image width='100%' alt='Bike Image' {...props} />
)

export default BikeImage
