import { FC } from 'react';
import {Route, Routes} from 'react-router-dom';
import { ROUTE_CONSTANTS } from 'constants/routeConstants';
import Home from 'pages/b2e/home/Home';

const Router: FC = () => (  
  <Routes>    
    <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
  </Routes>
);
export default Router;