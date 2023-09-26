import { createTodo } from '@/api/todo/todoApiService';
import { addTodo } from '@/features/todo/todoSlicer';
import { RootState } from '@/store/todoStore';
import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function TodoInput() {
  const { todo } = useSelector((state: RootState) => state.todo);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newTodo = event.target.value;
    setInput(newTodo);
  };

  const handleCreateTodo = async (todoText: string) => {
    try {
      const response = await createTodo(todoText);
      if (response) {
        const newTodo = response;
        console.log('check reponse success : ', newTodo);
        console.log('check todo : ', todo);

        dispatch(addTodo(newTodo));
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form method="post">
      <input type="text" onChange={inputHandler} value={input} />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleCreateTodo(input);
        }}
      >
        추가
      </button>
    </form>
  );
}

export default TodoInput;
