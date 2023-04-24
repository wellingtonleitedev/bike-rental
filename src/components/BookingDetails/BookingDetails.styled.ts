import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Card,
  CardProps,
  IconButton,
  IconButtonProps,
  styled,
} from '@mui/material'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'

export const Container = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: 34,

  [theme.breakpoints.down('md')]: {
    border: 0,
    borderRadius: 0,
    maxHeight: '80vh',
    padding: 0,
    overflow: 'scroll',
  },
}))

export const ImageContainer = styled(Box)<CardProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    padding: '34px 24px',
  },
}))

export const DetailsContainer = styled(Box)<CardProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '24px 24px 0 0',
    color: theme.palette.grey[500],
    padding: '34px 24px 0',

    h1: {
      fontSize: 24,
    },
  },
}))

export const LikeButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.common.black}`,
  borderRadius: 20,
  width: 60,
  height: 60,

  [theme.breakpoints.down('md')]: {
    border: `1px solid ${theme.palette.grey[500]}40`,

    '&.BikeDetail__LikeButton': {
      display: 'none',
    },
  },
}))

export const FavoriteIcon = styled(FavoriteBorderOutlined)(({ theme }) => ({
  color: theme.palette.common.black,

  [theme.breakpoints.down('md')]: {
    color: theme.palette.grey[500],
  },
}))

export const PriceRow = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

export const Footer = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  bottom: 0,
  display: 'none',
  gap: 10,
  left: 0,
  padding: '30px 0 30px',
  position: 'sticky',
  right: 0,

  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}))

export const RentBikeButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.black,
  borderRadius: 20,
  flex: 1,
  fontSize: 16,
  fontWeight: 800,
  textTransform: 'capitalize',

  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
}))
