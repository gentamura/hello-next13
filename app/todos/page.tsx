import { use } from 'react';

type Todo = {
  title: string,
};

const getTodos = async () => {
  const res = await fetch('http://localhost:3000/api/todos');

  return res.json();
};

const TodosPage = () => {
  const todos = use<Todo[]>(getTodos());

  return (
    <ul>
      {
        todos.map((todo) => (
          <li>{ todo.title } </li>
        ))
      }
    </ul>
  )
};

export default TodosPage;
