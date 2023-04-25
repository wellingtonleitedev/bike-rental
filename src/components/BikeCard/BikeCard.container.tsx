import Bike from 'models/Bike'
import { useState } from 'react'
import BikeCard from './BikeCard.component'

interface BikeCardProps {
  bike: Bike
  horizontal?: boolean
  handleOpenBikeDetails: () => void
}

const BikeCardContainer = ({ bike, horizontal = false, handleOpenBikeDetails }: BikeCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  const handleIsImageLoaded = (isLoading: boolean) => {
    setIsImageLoaded(isLoading)
  }

  return (
    <BikeCard
      id={bike.id}
      isImageLoaded={isImageLoaded}
      handleIsImageLoaded={handleIsImageLoaded}
      handleOpenBikeDetails={handleOpenBikeDetails}
      horizontal={horizontal}
      name={bike.name}
      type={bike.type}
      bodySize={bike.bodySize}
      description={bike.description}
      imageUrls={bike.imageUrls}
      cardImage={bike.imageUrls[0] || ''}
      rate={bike.rate}
    />
  )
}

export default BikeCardContainer
