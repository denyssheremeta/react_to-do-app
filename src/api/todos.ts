import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

export const USER_ID = 684;

export const getTodos = () => {
  return client.get<Todo[]>(`/todos?userId=${USER_ID}`);
};

export const addTodo = (newTodo: Omit<Todo, 'id'>) => {
  return client.post<Todo>('/todos', newTodo);
};

export const deleteTodo = (todoId: number) => client.delete(`/todos/${todoId}`);

export const updateTodo = (todo: Todo) =>
  client.patch<Todo>(`/todos/${todo.id}`, todo);
