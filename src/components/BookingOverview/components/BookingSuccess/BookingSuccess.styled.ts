import { Box, BoxProps, Button, ButtonProps, styled } from '@mui/material'

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: '60px 0',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    padding: '20px 0',
  },
}))

export const ImageBox = styled(Box)<BoxProps>(() => ({
  maxWidth: 185,
}))

export const GoBackButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.grey[500],
  borderRadius: 20,
  flex: 1,
  fontSize: 16,
  fontWeight: 800,
  marginTop: 30,
  padding: '15px 20px',
  textTransform: 'capitalize',
  width: '100%',

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
  },

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}))
