import axios from "axios";
import { action, makeObservable, observable } from "mobx";
import { getCookie, setCookie } from "../utils/cookies";

export interface GoalsType {
  id: number;
  goal_date: string;
  goal_title: string;
  goal_ispoint: 0 | 1;
  user_id: number;
}

export class Goals {
  goals: GoalsType[] = [];
  activeDelete: boolean = false;
  enterGoal: number = 0;
  choiceGoals: GoalsType | undefined = undefined;
  token: string = "";

  constructor() {
    makeObservable(this, {
      activeDelete: observable,
      goals: observable,
      enterGoal: observable,
      token: observable,
      handleGetGoals: action,
      handleDeleteList: action,
      handleMakeNewList: action,
      handleModifyList: action,
      handleActiveDelete: action,
      handleActiveDeleteDisabled: action,
      handleEnterTodo: action,
      handleExitTodo: action,
      handleSetToken: action,
    });
  }

  getTodosById = (targetId: number) => {
    return this.goals.find(({ id }) => targetId === id);
  };

  handleGetGoals = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_URL}/goals/`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      this.goals = data;
    } catch (e) {
      setCookie("accessToken", "");
      return e;
    }
  };

  handleMakeNewList = async (title: string) => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_URL}/goals`,
      {
        contents: title,
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      }
    );
    this.goals = data;
  };

  handleDeleteList = async (id: number) => {
    await axios.delete(`${import.meta.env.VITE_URL}/goals/${id}`, {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    });
    await this.handleGetGoals();
  };

  handleModifyList = (id: number, title: string) => {
    // this.goals = this.goals.map((item) => {
    //   if (item.id === id) {
    //     item.title = title;
    //   }
    //   return item;
    // });
  };

  handleActiveDeleteDisabled = () => {
    return (this.activeDelete = false);
  };

  handleActiveDelete = () => {
    return (this.activeDelete = !this.activeDelete);
  };

  handleEnterTodo = (id: number) => {
    this.choiceGoals = this.goals.find((todolist) => todolist.id === id);
    return (this.enterGoal = id);
  };

  handleExitTodo = () => {
    return (this.enterGoal = 0);
  };

  handleSetToken = (token: string) => {
    this.token = token;
  };
}

export const GoalsState = new Goals();
