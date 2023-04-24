import ReactCalendar from 'react-calendar'
import { Box, Button, ButtonProps, styled } from '@mui/material'

export const DatePickerButton = styled(Button)(({ theme }) => ({
  alignItems: 'center',
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.common.black,
  display: 'flex',
  fontWeight: 600,
  gap: 10,
  justifyContent: 'flex-start',
  padding: '10px 20px',
  textTransform: 'none',
  width: '100%',

  svg: {
    color: theme.palette.primary.main,
  },

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}))

export const StyledCalendar = styled(ReactCalendar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: 0,
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.grey[500],
  width: '100%',

  '.react-calendar__navigation': {
    gap: 8,
    height: 'unset',
    marginBottom: 0,
    padding: '20px 20px 0',

    'button:enabled:hover, button:enabled:focus, button:disabled': {
      backgroundColor: theme.palette.primary.main,
    },

    '.react-calendar__navigation__arrow': {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 20,
      color: theme.palette.grey[500],
      height: 52,
      minWidth: 52,

      svg: {
        display: 'block',
        fontSize: 30,
        margin: 'auto',
      },

      '&:disabled': {
        border: `1px solid ${theme.palette.grey[500]}`,
        color: theme.palette.grey[500],
        filter: 'opacity(0.5)',
      },
    },

    '.react-calendar__navigation__prev-button': {
      order: 1,
    },

    '.react-calendar__navigation__next-button': {
      order: 2,
    },
  },

  '.react-calendar__viewContainer': {
    borderRadius: 40,
    padding: '20px 10px',

    '.react-calendar__century-view, .react-calendar__decade-view, .react-calendar__year-view': {
      '.react-calendar__tile': {
        padding: '32px 8px',
        height: 'unset',

        '&--now': {
          border: `1px solid ${theme.palette.grey[500]}`,

          abbr: {
            border: 0,
            borderRadius: 0,
          },
        },

        '&--rangeStart': {
          background: theme.palette.grey[500],
        },

        '&--rangeEnd': {
          background: theme.palette.grey[500],
        },
      },
    },

    '.react-calendar__month-view': {
      '&__weekdays': {
        color: theme.palette.grey[500],
        fontFamily: theme.typography.fontFamily,
        filter: 'opacity(0.5)',
        fontSize: 16,
        textTransform: 'capitalize',

        abbr: {
          textDecoration: 'none',
        },
      },

      '&__days': {
        gap: '5px 0',

        '.react-calendar__tile': {
          abbr: {
            borderRadius: 9999,
            height: 38,
            padding: 11,
            width: 38,
          },

          '&--now': {
            background: theme.palette.primary.main,

            abbr: {
              border: `1px solid ${theme.palette.grey[500]}`,
            },
          },

          '&--rangeStart': {
            background: `linear-gradient(90deg, transparent 50%, ${theme.palette.primary.light}70 50%)`,
          },

          '&--rangeEnd': {
            background: `linear-gradient(90deg, ${theme.palette.primary.light}70 50%, transparent 50%)`,
          },

          '&--rangeBothEnds': {
            background: 'transparent',
          },
        },
      },
    },

    '.react-calendar__tile': {
      alignItems: 'center',
      background: theme.palette.primary.main,
      color: theme.palette.grey[500],
      display: 'flex',
      height: 38,
      justifyContent: 'center',
      padding: 0,

      abbr: {
        borderRadius: 9999,
      },

      '&--range': {
        background: `${theme.palette.primary.light}70`,
        borderRadius: 0,
        color: theme.palette.grey[500],
      },

      '&--rangeStart abbr, &--rangeEnd abbr, &--hasActive': {
        background: theme.palette.grey[500],
        color: theme.palette.primary.main,
      },

      '&:disabled': {
        color: theme.palette.grey[500],
        filter: 'opacity(0.5)',
      },
    },
  },

  [theme.breakpoints.down('md')]: {
    borderRadius: '30px 30px 0 0',
  },
}))

export const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: 20,

  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}))

export const SelectDateButton = styled(Button)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.black,
  borderRadius: 20,
  flex: 1,
  fontSize: 16,
  fontWeight: 800,
  padding: '15px 20px',
  textTransform: 'capitalize',
  width: '100%',
}))
