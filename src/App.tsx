import './App.scss'
import { FC, ReactElement, Suspense, lazy, useEffect, useState } from 'react';
import { ErrorBoundary } from 'components';
import {  RootState } from 'store/store';
import { useSelector } from 'react-redux';
import Loader from "components/Loader/Loader";
import NotFound from "components/NotFound/NotFound";
import { ThemeProvider } from '@mui/material';
import { customTheme } from './Themse/customTheme';
import {applyThemeConfig} from './utils/helper/helpers';

const AlertDialog = lazy(() => import("components/common/AlertDialog"));
const Router = lazy(() => import("router/Router"));

const App: FC = (): ReactElement => {
  const error = useSelector((state: RootState) => state.error);
  const alert = useSelector((state: RootState) => state.alert);
  const loader = useSelector((state: RootState) => state.loader);
  const [themeConfig, setThemeConfig] = useState({} as any);

  useEffect(()=>{  
    if (window?.headerResponse && window?.headerResponse?.themeConfig) {
      applyThemeConfig(window?.headerResponse?.themeConfig, setThemeConfig);
    }
  },[])
  return (
    <ThemeProvider theme={customTheme(themeConfig)}>
      <Suspense fallback={<Loader oMessage={"Loading...."} />}>
        <ErrorBoundary>
          {error.isPageNotFound && <NotFound />}
          {(loader?.isLoading) && (!error?.isPageNotFound) && 
          <Loader  oMessage={"Loading...."}/>}
          {alert?.show && <AlertDialog {...alert}></AlertDialog>}
          {!error.isPageNotFound && (
            <main>
              <Router />
            </main>
          )}
        </ErrorBoundary>
      </Suspense>
    </ThemeProvider>
  );
};
export { App };
