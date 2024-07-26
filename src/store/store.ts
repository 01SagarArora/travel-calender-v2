import { configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './rootReducer';
import { commonS2SApi } from 'api';
import { commonApi } from 'api/commonApi/apis';

const initStore = (preloadedState?: Partial<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      commonS2SApi.middleware,
      commonApi.middleware
    ]),
  preloadedState,
  devTools: String(process.env.NODE_ENV).trim() !== 'production',
});

export type Store = ReturnType<typeof initStore>;
export type RootState = StateFromReducersMapObject<typeof rootReducer>;
export type AppDispatch = Store['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { initStore };
