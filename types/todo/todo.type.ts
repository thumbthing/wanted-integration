export type TokenType = {
  accessToken: string;
};

export interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface TodoPropsType {
  accessToken: string;
  todo: TodoType;
  todoList: TodoType[];
}
