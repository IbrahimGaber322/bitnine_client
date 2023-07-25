import { createTheme } from "@mui/material/styles";
import "../App.css";
const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2255ff',
      dark: '#022EA9',
      light: '#39bde7',
    },
    secondary: {
      main: '#f8bf14',
    },
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  typography: {
    fontFamily: [
      'Monda',
      'Noto Sans KR',
      'sans-serif'
    ].join(','),
    body1: {
      fontSize: '16px',
  '@media (max-width:767px)': {
    fontSize: '13px',
  }
    },
    h3:{
      fontSize:"21px",
      lineHeight:1.2,
      fontWeight:700,
      color:"#444444"
    },
    h2:{
      fontSize: '34px',
  '@media (max-width:767px)': {
    fontSize: '26px',
  },
      lineHeight:1.1,
      color:"#000",
      fontWeight:700
    },
    h4:{
      fontSize: '16px',
    },
    h5:{
      fontSize: '20px',
  '@media (max-width:767px)': {
    fontSize: '18px',
  },
      color:"#444444",
      fontWeight:700,
      letterSpacing:"0px",
      lineHeight:1.4,
      
    }
  },
});



export default theme;
