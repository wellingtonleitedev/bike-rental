import { InfoOutlined } from '@mui/icons-material'
import { Box, BoxProps, Button, ButtonProps, Card, CardProps, styled } from '@mui/material'

export const OverviewContainer = styled(Card)<CardProps>(({ theme }) => ({
  alignSelf: 'start',
  borderColor: theme.palette.grey[500],
  padding: 10,
}))

export const PriceRow = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const InfoIcon = styled(InfoOutlined)(({ theme }) => ({
  color: theme.palette.grey[500],
}))

export const BookingButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  marginTop: 30,
  textTransform: 'none',
  color: theme.palette.common.white,
  fontWeight: 800,
}))

export const ModalContent = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  margin: '25% 20px',
  padding: 20,
}))
