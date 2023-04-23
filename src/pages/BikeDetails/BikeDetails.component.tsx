import { Breadcrumbs, Link, Typography } from '@mui/material'
import Header from 'components/Header'
import {
  BreadcrumbContainer,
  BreadcrumbHome,
  BreadcrumbSeparator,
  Content,
} from './BikeDetails.styles'
import BookingOverview, { BookingOverviewProps } from 'components/BookingOverview'
import BookingDetails from 'components/BookingDetails'

const BikeDetails = ({ bike, ...props }: BookingOverviewProps) => {
  return (
    <div data-testid='bike-details-page'>
      <Header />

      <BreadcrumbContainer data-testid='bike-details-breadcrumbs'>
        <Breadcrumbs separator={<BreadcrumbSeparator />}>
          <Link underline='hover' display='flex' alignItems='center' color='white' href='/'>
            <BreadcrumbHome />
          </Link>

          <Typography fontWeight={800} letterSpacing={1} color='white'>
            {bike?.name}
          </Typography>
        </Breadcrumbs>
      </BreadcrumbContainer>
      <Content>
        <BookingDetails bike={bike} />
        <BookingOverview bike={bike} {...props} />
      </Content>
    </div>
  )
}

export default BikeDetails
