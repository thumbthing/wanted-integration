import { TokenType } from '@/types/todo/todo.type';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: TokenType = {
  accessToken: '',
};

export const todoSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    addToken: (draftState, action: PayloadAction<string>) => {
      const token = action.payload;
      draftState.accessToken = token;
    },
    deleteToken: (draftState) => {
      draftState.accessToken = '';
    },
  },
});

export const { addToken, deleteToken } = todoSlice.actions;

export default todoSlice.reducer;
