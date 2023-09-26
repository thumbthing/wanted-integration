import authErrorHandler from '@/util/todo/authErrorHandler';
import httpInstance from '../httpInstanceTodo';

export interface UserInformation {
  email: string;
  password: string;
  endPoint: string | undefined;
}

const authService = async ({ email, password, endPoint }: UserInformation) => {
  const data = {
    email,
    password,
  };

  try {
    const response = await httpInstance.post(`/auth/${endPoint}`, data);
    return response;
  } catch (error) {
    authErrorHandler(error);
    return null;
  }
};

export default authService;
