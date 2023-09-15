'use client';

import { TodoContextType } from '@/types/todo/todo.type';
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';

const defaultState: TodoContextType = {
  access_token: '',
  todo: {
    id: 0,
    todo: 'todo를 입력해주세요',
    isCompleted: false,
    userId: 0,
  },
  todoList: [],
};

const StateContext = createContext<
  { state: TodoContextType; setState: React.Dispatch<React.SetStateAction<TodoContextType>> } | undefined
>(undefined);

export const TodoContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error('TodoContext must be used within a TodoProvider');
  }
  return context;
};

export function TodoProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<TodoContextType>(defaultState);
  const memorizedState = useMemo(() => ({ state, setState }), [state]);

  return <StateContext.Provider value={memorizedState}>{children}</StateContext.Provider>;
}
