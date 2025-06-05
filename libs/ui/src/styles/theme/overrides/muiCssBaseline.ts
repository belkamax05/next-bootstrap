import { Theme } from '@mui/material';
import { fontFamily } from '../config';

const muiCssBaseline = (theme: Theme) => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        fontFamily,
        fontSize: 14,
        lineHeight: '25px',
        fontWeight: 400,
        color: theme.palette.copy.main,
      },
      hr: {
        border: 'none',
        backgroundColor: theme.palette.defaultTertiary.main,
        height: 1,
      },
      a: {
        textDecoration: 'none',
        '&:hover, & h1:hover, & h2:hover, & h3:hover, & h4:hover, & h5:hover': {
          textDecoration: 'underline',
          textDecorationColor: theme.palette.primary.main,
        },
      },
      h1: {
        fontSize: 18,
        [theme.breakpoints.up('md')]: {
          fontSize: 22,
          lineHeight: '25px',
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 26,
          lineHeight: '34px',
        },
        fontWeight: 500,
        lineHeight: '25px',
        letterSpacing: 0,
        color: theme.palette.primary.main,
        marginBlockStart: 0,
        textTransform: 'lowercase',
        display: 'block',
        '& ::first-letter, &::first-letter': {
          textTransform: 'uppercase',
        },
      },
      h2: {
        fontSize: 18,
        [theme.breakpoints.up('lg')]: {
          fontSize: 22,
          lineHeight: '30px',
        },
        fontWeight: 500,
        lineHeight: '25px',
        letterSpacing: 0,
        color: theme.palette.primary.main,
        marginBlockStart: 0,
        textTransform: 'lowercase',
        display: 'block',
        '& ::first-letter, &::first-letter': {
          textTransform: 'uppercase',
        },
      },
      h3: {
        fontSize: 16,
        [theme.breakpoints.up('lg')]: {
          fontSize: 18,
        },
        fontWeight: 500,
        lineHeight: '25px',
        letterSpacing: 0,
        color: theme.palette.primary.main,
        marginBlockStart: 0,
        textTransform: 'lowercase',
        display: 'block',
        '& ::first-letter, &::first-letter': {
          textTransform: 'uppercase',
        },
      },
      h4: {
        fontSize: 14,
        [theme.breakpoints.up('lg')]: {
          fontSize: 16,
        },
        fontWeight: 500,
        lineHeight: '25px',
        letterSpacing: 0,
        color: theme.palette.primary.main,
        marginBlockStart: 0,
        textTransform: 'lowercase',
        display: 'block',
        '& ::first-letter, &::first-letter': {
          textTransform: 'uppercase',
        },
      },
      h5: {
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '25px',
        letterSpacing: 0,
        color: theme.palette.primary.main,
        marginBlockStart: 0,
        textTransform: 'lowercase',
        display: 'block',
        '& ::first-letter, &::first-letter': {
          textTransform: 'uppercase',
        },
      },
      h6: {
        fontSize: 12,
        fontWeight: 500,
        lineHeight: '18px',
        letterSpacing: 0,
        color: theme.palette.primary.main,
        marginBlockStart: 0,
        textTransform: 'lowercase',
        display: 'block',
        '& ::first-letter, &::first-letter': {
          textTransform: 'uppercase',
        },
      },

      // Custom Fonts for content start here
      '.Avenir_font': {
        '& h1,& h2,& h3,& h4,& h5,& h6': {
          fontFamily: 'Avenir LT W05_85 Heavy, Arial, sans-serif',
          fontWeight: 'bold',
        },
        '& p.MuiTypography-paragraph': {
          fontFamily: 'Avenir LT W05_65 Medium, Arial, sans-serif',
        },
        '& span.MuiButton-label': {
          fontFamily: 'Avenir LT W05_95 Black, Arial, sans-serif',
        },
      },
      '.FuturaLT_font': {
        '& h1,& h2,& h3,& h4,& h5,& h6': {
          fontFamily: 'Futura LT W05 Bold, Arial, sans-serif',
          fontWeight: 400,
        },
        '& p.MuiTypography-paragraph, .c023_videobox c023_textContainer p.MuiTypography-paragraph':
          {
            fontFamily: 'Futura LT W05 Light, Arial, sans-serif',
            fontWeight: 600,
            fontSize: '20px',
          },
        '& span.MuiButton-label': {
          fontFamily: 'Futura LT W05 Book, Arial, sans-serif',
          fontWeight: 700,
        },
      },
      '.MuseoSlab_font': {
        '& h1,& h2,& h3,& h4,& h5,& h6': {
          fontFamily: 'MuseoSlab500, Arial, sans-serif',
          fontWeight: 500,
        },
      },
      '.Georgia_font': {
        '& h1,& h2,& h3,& h4,& h5,& h6': {
          fontFamily: 'Georgia, Arial, sans-serif',
          fontWeight: 500,
        },
      },
      '.BrownLL_font': {
        '& h1,& h2,& h3,& h4,& h5,& h6': {
          fontFamily: 'BrownLL-Regular, Arial, sans-serif',
          fontWeight: 600,
        },
        '& p.MuiTypography-paragraph': {
          fontFamily: 'BrownLL-Regular, Arial, sans-serif',
          fontWeight: 400,
        },
      },
      '.Minion_font': {
        '& h1,& h2,& h3,& h4,& h5,& h6': {
          fontFamily: 'minion-3-display, serif',
          fontWeight: 500,
        },
        '& p.MuiTypography-paragraph': {
          fontFamily: 'brandon-grotesque, sans-serif',
          fontSize: '18px',
          fontWeight: 300,
        },
        '& span.MuiButton-label': {
          fontFamily: 'brandon-grotesque, sans-serif',
          fontSize: '18px',
          textTransform: 'uppercase',
        },
      },
      '.Archer_font': {
        '& h1,& h2,& h3,& h4,& h5,& h6': {
          fontFamily: 'HCo Archer SSm Bold, Arial, sans-serif',
          fontWeight: 800,
        },
      },
      '.Brandon_Grot_font': {
        '& h1,& h2': {
          fontFamily: 'BrandonW01_Medium, Arial, sans-serif',
          fontWeight: 600,
        },
        '& h3,& h4,& h5,& h6': {
          fontFamily: 'BrandonW01_Medium, Arial, sans-serif',
          fontWeight: 400,
        },
        '& p': {
          fontFamily: 'BrandonW01_Regular, Arial, sans-serif',
          fontWeight: 100,
        },
      },
      '.Aguila_font': {
        '& h1,& h2,& h3,& h4,& h5,& h6': {
          fontFamily: 'guilaBold, Arial, sans-serif',
          fontWeight: 'bold',
        },
      },
      '.Merriweather_font': {
        '& h2, & h3': {
          textTransform: 'lowercase',
          fontFamily: 'Merriweather, serif',
          '& ::first-letter, &::first-letter': {
            textTransform: 'lowercase',
          },
        },
      },
    },
  },
});

export default muiCssBaseline;
