import { Colors, TodoContentType } from "/src/types";
import { action, makeObservable, observable, runInAction } from "mobx";
import { v4 } from "uuid";

const mock: TodoContentType[] = [
  {
    id: 1,
    todoText: "test",
    isCheckedTodo: false,
    userId: "benny",
  },
  {
    id: 2,
    todoText: "test2",
    isCheckedTodo: false,
    userId: "benny",
  },
];

export class Todo {
  todos: TodoContentType[] = [];
  color: Colors = "#ea3232";

  constructor(mock: TodoContentType[]) {
    makeObservable(this, {
      todos: observable,
      color: observable,
      handleAddTodo: action,
      handleSetTodo: action,
      handleDeleteTodo: action,
      handleCheckTodo: action,
      handleColorChange: action,
    });
    this.todos = mock;
  }

  handleSetTodo = (todos: TodoContentType[]) => {
    runInAction(() => {
      this.todos = todos;
    });
  };

  handleAddTodo = (
    todoText: string,
    userId: string,
    color: Colors = "#ea3232"
  ) => {
    const newTodo: TodoContentType = {
      id: v4(),
      todoText,
      userId,
      isCheckedTodo: false,
      color,
    };
    this.todos.push(newTodo);
    return this.todos;
  };

  handleDeleteTodo = (id: number | string) => {
    return (this.todos = this.todos.filter((todo) => todo.id !== id));
  };

  handleCheckTodo = (id: number | string) => {
    return (this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return Object.assign(todo, (todo.isCheckedTodo = !todo.isCheckedTodo));
      }
      return todo;
    }));
  };

  handleColorChange = (color: Colors) => {
    this.color = color;
  };
}

export const TodoState = new Todo(mock);
