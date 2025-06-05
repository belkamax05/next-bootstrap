import { Theme } from '@mui/material';

const muiAccordion = (theme: Theme) => ({
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderTop: `1px solid ${theme.palette.outline.main}`,
        borderBottom: `1px solid ${theme.palette.outline.main}`,
        boxShadow: 'none',
        '&:not(:last-child)': {
          borderBottom: 0,
        },
        '&:before': {
          display: 'none',
        },
      },
    },
  },
  MuiAccordionDetails: {
    styleOverrides: {
      root: {
        display: 'block',
        '& h4': {
          margin: '0 0 14px 0',
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        minHeight: '45px',
        height: '45px',
      },
      content: {
        margin: 0,
        '& h4': {
          margin: '0',
        },
        '&.Mui-expanded': {
          margin: '0',
        },
      },
      expandIcon: {
        transform: 'none',
        transition: 'none',
        color: theme.palette.primary.main,
      },
    },
  },
});

export default muiAccordion;
