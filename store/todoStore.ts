import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/tokenSlicer';

export const todoStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof todoStore.getState>;

export type AppDispatch = typeof todoStore.dispatch;
