import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { loadableReady } from '@loadable/component';
import { App } from './App';
import { initStore } from 'store/store';
import { Provider } from 'react-redux';
import { isServer } from 'utils';
import { ROUTE_CONSTANTS } from 'constants/routeConstants';
import { ThemeProvider } from '@mui/material';
import { Theme } from './Themse/theme';
const store = initStore(!isServer && window.__PRELOADED_STATE__ && window.__PRELOADED_STATE__);

if (module.hot) {
  module.hot.accept(['store/store', 'store/rootReducer'], async () => {
    const { createReducer } = await import('store/rootReducer');
    store.replaceReducer(createReducer());
  });
}

const indexJSX
  = 
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter basename={ROUTE_CONSTANTS.BASE_PATH}>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
    </ThemeProvider>

const container = document.getElementById('root');

// eslint-disable-next-line no-undef
if (NO_SSR) {
  hydrateRoot(container!, indexJSX);
} else {
  loadableReady(() => {
    createRoot(container!).render(indexJSX);
  });
}
