import { createTheme } from "@mui/material";

export const customTheme = (config:any)=>createTheme({
    typography: {
    fontFamily: 'Rubik, sans-serif',
    body1: {
      fontSize: '13px'
    }
  },
  palette: {
    secondary: {
      main: '#3590bb',
    },
    error: {
      main: '#f34f4f'
    },
    info: {
      main: '#2a92c5'
    },
    success:{
      main: '#27ac62',
      contrastText: '#fff'
    },
    primary:{
      main: config.buttonColor || '#EA2330',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform : 'none',
          fontSize: '12px',
          ':disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
            backgroundColor: config.buttonColor|| '#e2e2e2',
            borderColor: config.buttonColor || '#e2e2e2',
            boxShadow: 'none',
            color: config.buttonTextColor||'#fff',
            opacity: '0.4'
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#f34f4f',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media(min-width: 1200px)' : {
           maxWidth:"1240px",
           width: "100%",
           paddingRight: "15px",
           paddingLeft: "15px",
           marginRight: "auto",
           marginLeft: "auto",
       
          }
        }
      }
    },
    MuiCheckbox: {
    styleOverrides: {
        root: {
        '&.Mui-checked': {
            color: '#f34f4f',
            },
        padding: '5px'
        },
    },
    },
    MuiCard: {
    styleOverrides: {
        root: {
        boxSizing: 'border-box',
            boxShadow: '0 2px 9px 0 rgba(0, 0, 0, 0.15)',
            border : '1px solid transparent',
            borderRadius: '8px',
        }
        
    }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            // Add your custom styles for the disabled state here
            backgroundColor: '#f5f5f5', // Example background color
            color: '#999', // Example text color
            // Add more styles as needed
          },
        },
      },
    },
    MuiInputBase:{
      styleOverrides:{
        input:{
          '&:disbaled':{
            backgroudColor: '#fff'
          }
        }
      }
    }
  },
})