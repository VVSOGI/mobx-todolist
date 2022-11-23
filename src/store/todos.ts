import { action, makeAutoObservable, makeObservable, observable } from "mobx";

export interface TodoList {
  id: number;
  date: string;
  title: string;
}

export class Todos {
  havingTodoList: TodoList[] = [];
  constructor() {
    makeObservable(this, {
      havingTodoList: observable,
      handleDeleteList: action,
      handleMakeNewList: action,
      handleModifyList: action,
    });
  }

  handleMakeNewList({ id, date, title }: TodoList) {
    const newList = { id, date, title };

    this.havingTodoList.push(newList);
  }

  handleDeleteList(id: number) {
    this.havingTodoList = this.havingTodoList.filter((list) => list.id !== id);
    return this.havingTodoList;
  }

  handleModifyList(id: number, title: string) {
    this.havingTodoList = this.havingTodoList.map((item) => {
      if (item.id === id) {
        item.title = title;
      }
      return item;
    });
  }
}

export const todosState = new Todos();
