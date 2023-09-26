import React from 'react';
import TodoInput from '@/components/todo/todo/TodoInput';
import TodoProvider from '../Todo.Provider';

function MyTodo() {
  return (
    <TodoProvider>
      <div>
        <TodoInput />
      </div>
    </TodoProvider>
  );
}
export default MyTodo;
