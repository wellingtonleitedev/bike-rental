import { Box, Typography } from '@mui/material'
import theme from 'styles/theme'

const NavigationLabel = ({ label }: { label: string }) => {
  const [month, year] = label.split(' ')

  return (
    <Box>
      <Typography
        variant='h2'
        color='grey.500'
        fontSize={34}
        lineHeight={1}
        textAlign='left'
        overflow='hidden'
        textOverflow='ellipsis'
      >
        {month}
      </Typography>
      <Typography color={`${theme.palette.grey[500]}50`} fontWeight={600} textAlign='left'>
        {year}
      </Typography>
    </Box>
  )
}

export default NavigationLabel
