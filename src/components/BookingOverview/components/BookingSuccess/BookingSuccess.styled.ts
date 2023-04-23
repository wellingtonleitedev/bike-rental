import { Box, BoxProps, styled } from '@mui/material'

export const Container = styled(Box)<BoxProps>(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: '60px 0',
}))

export const ImageBox = styled(Box)<BoxProps>(() => ({
  maxWidth: 185,
}))
