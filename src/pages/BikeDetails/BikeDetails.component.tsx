import { Breadcrumbs, Link, Typography } from '@mui/material'
import BookingOverview, { BookingOverviewProps } from 'components/BookingOverview'
import BookingDetails from 'components/BookingDetails'
import Header from 'components/Header'
import { useDisclosure } from 'hooks'
import {
  BreadcrumbContainer,
  BreadcrumbHome,
  BreadcrumbSeparator,
  Content,
} from './BikeDetails.styles'

const BikeDetails = ({ bike, ...props }: Omit<BookingOverviewProps, 'onToggle'>) => {
  const { open, onToggle } = useDisclosure(true)

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
        <BookingDetails bike={bike} open={open} onToggle={onToggle} />
        <BookingOverview bike={bike} onToggle={onToggle} {...props} />
      </Content>
    </div>
  )
}

export default BikeDetails
