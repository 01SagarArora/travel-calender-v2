import "./Loader.scss";
import  CircularProgress  from "@mui/material/CircularProgress";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Theme {
    progress: {
      danger: React.CSSProperties['color'];
    };
  }
}

export default function Loader(props: { oMessage: String }) {

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#f34f4f',
  //     },
  //   },
  // });
  
  return (
    <div className="o-block" id="YTLoaderId">
      <div className="o-bg"></div>
      <div className="o-content text-center">
          {/* <ThemeProvider theme={theme}>  
            <CircularProgress color='primary' size={30}/>
          </ThemeProvider>   */}
          <CircularProgress color='primary' size={30}/>
        <h3 className="fs-md normal show" id="loadMessageBefore">{props.oMessage || ''}</h3>
      </div>
    </div>
  )
}


