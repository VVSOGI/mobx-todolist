import { Colors, TodoContentType } from "/src/types";
import { action, makeObservable, observable, runInAction } from "mobx";
import axios from "axios";

export class Todo {
  todos: TodoContentType[] = [];
  color: Colors = "#ea3232";
  token = "";

  constructor() {
    makeObservable(this, {
      todos: observable,
      color: observable,
      handleAddTodo: action,
      handleSetTodo: action,
      handleDeleteTodo: action,
      handleCheckTodo: action,
      handleColorChange: action,
    });
    this.todos = [];
  }

  handleGetTodo = async (token: string, goalId: number) => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_URL}/todolist/${goalId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    this.todos = data;
  };

  handleSetTodo = (todos: TodoContentType[]) => {
    runInAction(() => {
      this.todos = todos;
    });
  };

  handleAddTodo = async (
    contents: string,
    goalId: number,
    color: Colors = "#ea3232"
  ) => {
    await axios.post(
      `${import.meta.env.VITE_URL}/todolist/`,
      {
        contents,
        goalId,
        color,
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    await this.handleGetTodo(this.token, goalId);
  };

  handleDeleteTodo = async (id: number | string) => {
    try {
      const { data: goalId } = await axios.delete(
        `${import.meta.env.VITE_URL}/todolist/${id}`,
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );

      this.handleGetTodo(this.token, goalId);
    } catch (e) {}
  };

  handleCheckTodo = async (id: number | string) => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_URL}/todolist/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
      const goalId = data[0].goal_id;
      this.handleGetTodo(this.token, goalId);
    } catch (e) {}
  };

  handleColorChange = (color: Colors) => {
    this.color = color;
  };

  handleSetToken = (token: string) => {
    this.token = token;
  };
}

export const TodoState = new Todo();
