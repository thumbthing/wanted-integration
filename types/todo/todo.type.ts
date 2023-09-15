export type TokenType = {
  access_token: string;
};

export type InputType = {
  email: string;
  password: string;
};

export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodoContextType {
  access_token: string;
  todo: TodoType;
  todoList: TodoType[];
}
