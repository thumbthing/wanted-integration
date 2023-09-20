import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from '../features/counter/todo/tokenSlicer';

export const todoStore = configureStore({
  reducer: {
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof todoStore.getState>;

export type AppDispatch = typeof todoStore.dispatch;
