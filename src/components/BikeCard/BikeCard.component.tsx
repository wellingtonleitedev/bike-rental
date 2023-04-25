import { Box, Divider, IconButton, Typography } from '@mui/material'
import BikeType from 'components/BikeType'
import BikeImage from 'components/BikeImage'
import BikePlaceholder from 'assets/bike-placeholder.png'
import Bike from 'models/Bike'
import {
  Container,
  Header,
  Footer,
  Name,
  PriceText,
  ImageContainer,
  FavoriteIcon,
} from './BikeCard.styles'

type JustDisplayedBikeData = Omit<Bike, 'candidateId' | 'maxLoad' | 'ratings'>

interface BikeCardComponentProps extends JustDisplayedBikeData {
  isImageLoaded: boolean
  cardImage: string
  horizontal: boolean
  handleOpenBikeDetails: () => void
  handleIsImageLoaded: (isLoading: boolean) => void
}

const BikeCard = ({
  isImageLoaded,
  name,
  cardImage,
  type,
  rate,
  horizontal,
  handleOpenBikeDetails,
  handleIsImageLoaded,
}: BikeCardComponentProps) => {
  const LikeButton = (
    <IconButton>
      <FavoriteIcon />
    </IconButton>
  )

  return (
    <Container
      className='BikeCard'
      variant='outlined'
      data-testid='bike-card'
      horizontal={horizontal ? 1 : 0}
    >
      {!horizontal && <Header action={LikeButton} />}

      <div className='BikeCard__Content' onClick={handleOpenBikeDetails}>
        <ImageContainer className='BikeCard__Content__ImageContainer'>
          {!isImageLoaded && (
            <img
              src={BikePlaceholder}
              width='100%'
              alt='Bike Placeholder Image'
              placeholder={BikePlaceholder}
            />
          )}

          <BikeImage
            src={cardImage}
            isLoaded={isImageLoaded}
            data-testid='bike-image'
            onLoadStart={() => handleIsImageLoaded(false)}
            onLoad={() => handleIsImageLoaded(true)}
          />
        </ImageContainer>

        <Box maxWidth={horizontal ? '65%' : '100%'}>
          <Name className='BikeCard__Details__Name' data-testid='bike-name'>
            {name}
          </Name>

          {!horizontal && <Divider />}

          <Footer
            className='BikeCard__Details__Footer'
            display='flex'
            justifyContent='space-between'
            data-testid='card-footer'
          >
            <BikeType type={type} data-testid='bike-type' />

            <Typography letterSpacing={1} data-testid='bike-price-day'>
              <PriceText className='BikeCard__Footer__PriceText' component={'span'}>
                {rate} €/
              </PriceText>
              Day
            </Typography>
          </Footer>
        </Box>
      </div>
    </Container>
  )
}

export default BikeCard
