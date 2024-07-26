import { combineReducers } from '@reduxjs/toolkit';
import { alertReducer } from './Alert/alertSlice';
import { loaderReducer } from './Loader/LoaderSlice';
import { commonS2SApi } from 'api';
import { errorReducer } from './Error/ErrorSlice';
import { mainDataReducer } from './MainData/MainDataSlice';
import { travellerDataReducer } from './TravellerData/TravellerDataSlice';
import { commonApi } from 'api/commonApi/apis';

export const rootReducer = {
  alert: alertReducer,
  loader: loaderReducer,
  error: errorReducer,
  mainData: mainDataReducer,
  travellerData: travellerDataReducer,
  [commonS2SApi.reducerPath]: commonS2SApi.reducer,
  [commonApi.reducerPath]: commonApi.reducer
};

export function createReducer() {
  return combineReducers(rootReducer);
}