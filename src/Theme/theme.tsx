import { createTheme } from '@mui/material';
import { blue, green, red } from '@mui/material/colors';
export const theme = createTheme({
  typography: {
    fontFamily: 'Rubik, sans-serif',
    body1: {
      fontSize: '13px'
    }
  },
  palette: {
    secondary: {
      main: '#1976d2',
    },
    error: {
      main: '#f34f4f'
    },
    info : {
      main: '#2a92c5'
    }
  },
  components: {
    MuiButton: {

      styleOverrides: {
        root: {
          fontSize: '12px',
          ':disabled': {
            cursor: 'not-allowed',
            pointerEvents: 'auto',
            backgroundColor: '#e2e2e2',
            borderColor: '#e2e2e2',
            boxShadow: 'none'
          }
        },
        
        containedPrimary: {
          ':hover:not(:disabled)': {
            background: '#f34f4f'
          },
          background: '#f34f4f',
          boxShadow: `0px 5px 14px ${red[200]}`
        },
        containedInfo: {
          ':hover:not(:disabled)': {
            background: ''
          },
          boxShadow: `0px 5px 14px ${blue[200]}`
        },
        containedError: {
          boxShadow: `0px 5px 14px ${red[200]}`
        },
        outlinedPrimary: {
          boxShadow: `0px 5px 10px ${red[100]}`
        },
        outlinedError: {
          boxShadow: `0px 5px 10px ${red[100]}`
        },
        outlinedSuccess: {
          boxShadow: `0px 5px 10px ${green[100]}`
        },
        outlinedSecondary: {
          boxShadow: `0px 5px 10px ${blue[100]}`
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
    MuiChip: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#f34f4f',
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          background: '#f7f7f7',
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '16px'

        }
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRuight: '16px'
        },
        expandIconWrapper: {
          '& .MuiSvgIcon-root': {
            border: '1px solid',
            borderRadius: '26px'
          }
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          borderTop: '2px solid #e2e2e2',
          padding: 0
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '::-webkit-scrollbar': {
            width: '.5rem',
          },
          '::-webkit-scrollbar-thumb': {
            background: '#ccc',
            borderRadius: '4px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#999',
            borderRadius: '4px',
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ':not(:last-child)': {
            borderBottom: '1px solid #e2e2e2'
          }
        }
      }
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          borderRight: '1px solid rgba(0, 0, 0, 0.23)'
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          '&.MuiPaginationItem-rounded': {
            margin: '0px',
            borderRadius: '0px',
            color: '#666666',
            background: '#fff',
            borderRight: 'none'
          },
          '&.Mui-selected': {
            background: '#666666',
            color: '#ffffff'
          },
          '&.MuiPaginationItem-ellipsis': {
            background: 'transparent',
            borderLeft: '1px solid rgba(0, 0, 0, 0.23)',
            height: '32px',
            padding: '3px 6px'
          },
          // '&.Mui-disabled': {
          //   borderRadius: '0px',
          //   cursor: 'not-allowed',
          //   pointerEvents: 'auto',
          //   backgroundColor: '#e2e2e2',
          //   fontSize: '10px',
          // },
          '&.MuiPaginationItem-root:hover': {
            color: '#1976d2',
          }
        }
      }
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
});