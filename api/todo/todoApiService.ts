import httpInstance from '../httpInstanceTodo';

export const createTodo = async (todo: string) => {
  const data = { todo };

  try {
    const response = await httpInstance.post('/todos', data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getTodoList = async () => {};

export const updateTodo = async () => {};

export const deleteTodo = async () => {};
