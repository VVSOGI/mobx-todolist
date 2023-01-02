import dayjs from "dayjs";
import { action, makeObservable, observable } from "mobx";

export interface TodoList {
  id: number;
  date: string;
  title: string;
}

export class Todos {
  havingTodoList: TodoList[] = [];
  activeDelete: boolean = false;
  enterTodos: number = 0;
  choiceTodo: TodoList | undefined = undefined;

  constructor() {
    makeObservable(this, {
      activeDelete: observable,
      havingTodoList: observable,
      enterTodos: observable,
      handleDeleteList: action,
      handleMakeNewList: action,
      handleModifyList: action,
      handleActiveDelete: action,
      handleActiveDeleteFalse: action,
      handleEnterTodo: action,
      handleExitTodo: action,
    });
  }

  getTodosById = (targetId: number) => {
    return this.havingTodoList.find(({ id }) => targetId === id);
  };

  handleMakeNewList = (title: string) => {
    const newList = {
      id: this.havingTodoList.length + 1,
      date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      title,
    };

    this.havingTodoList.push(newList);
  };

  handleDeleteList = (id: number) => {
    this.havingTodoList = this.havingTodoList.filter((list) => list.id !== id);
    return this.havingTodoList;
  };

  handleModifyList = (id: number, title: string) => {
    this.havingTodoList = this.havingTodoList.map((item) => {
      if (item.id === id) {
        item.title = title;
      }
      return item;
    });
  };

  handleActiveDeleteFalse = () => {
    return (this.activeDelete = false);
  };

  handleActiveDelete = () => {
    return (this.activeDelete = !this.activeDelete);
  };

  handleEnterTodo = (id: number) => {
    this.choiceTodo = this.havingTodoList.find(
      (todolist) => todolist.id === id
    );
    return (this.enterTodos = id);
  };

  handleExitTodo = () => {
    return (this.enterTodos = 0);
  };
}

export const todosState = new Todos();
