import Bike from 'models/Bike'
import { useState } from 'react'
import BikeCard from './BikeCard.component'

interface BikeCardProps {
  bike: Bike
  changeOnMobile?: boolean
  handleOpenBikeDetails: () => void
}

const BikeCardContainer = ({
  bike,
  changeOnMobile = false,
  handleOpenBikeDetails,
}: BikeCardProps) => {
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
      changeOnMobile={changeOnMobile}
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
