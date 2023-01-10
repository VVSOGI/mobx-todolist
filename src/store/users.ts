import axios from "axios";
import { action, makeObservable, observable } from "mobx";

export class Users {
  private token: string = "";
  isLogin: boolean = false;

  constructor() {
    makeObservable(this, {
      isLogin: observable,
      handleUserSignIn: action,
      handleUserSignUp: action,
    });
  }

  handleUserSignIn = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/auth/signin`,
        {
          email,
          password,
        }
      );
      console.log(data);

      // this.isLogin = true;
      return this.isLogin;
    } catch (e) {
      return;
    }
  };

  handleUserSignUp = async (
    email: string,
    username: string,
    password: string,
    doubleCheck: string
  ) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_URL}/auth/signup`,
        {
          email,
          password,
          username,
          doubleCheck,
        }
      );
      this.isLogin = true;
      return data;
    } catch (e) {
      return e;
    }
  };
}

export const UsersState = new Users();
