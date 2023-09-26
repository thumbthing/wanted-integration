import { TodoPropsType, TodoType } from '@/types/todo/todo.type';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: TodoPropsType = {
  accessToken: '',
  todo: {
    id: 0,
    todo: '',
    isCompleted: false,
    userId: 0,
  },
  todoList: [
    {
      id: 0,
      todo: 'Todo를 입력해주세요',
      isCompleted: false,
      userId: 0,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addToken: (draftState, action: PayloadAction<string>) => {
      const token = action.payload;
      draftState.accessToken = token;
    },
    deleteToken: (draftState) => {
      draftState.accessToken = '';
    },
    getTodoList: (draftState, action: PayloadAction<TodoType[]>) => {
      const todoList = action.payload;
      draftState.todoList = todoList;
    },
    addTodo: (draftState, action: PayloadAction<TodoType>) => {
      const newTodo = action.payload;
      draftState.todoList = [...draftState.todoList, newTodo];
    },
    updataTodo: (draftState, action: PayloadAction<TodoType>) => {
      const newTodo = action.payload;
      draftState.todoList = draftState.todoList.map((todo) => (todo.id === newTodo.id ? newTodo : todo));
    },
    deleteTodo: (draftState, action: PayloadAction<number>) => {
      const deleteId = action.payload;
      draftState.todoList = draftState.todoList.filter((todo) => todo.id !== deleteId);
    },
  },
});

export const { addToken, deleteToken, getTodoList, addTodo, updataTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
