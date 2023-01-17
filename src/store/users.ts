import axios from "axios";
import { action, makeObservable, observable } from "mobx";
import { NavigateFunction } from "react-router-dom";
import { getCookie, setCookie } from "../utils/cookies";

export class Users {
  isLogin: boolean = false;
  token: string = getCookie("accessToken");

  constructor() {
    makeObservable(this, {
      isLogin: observable,
      handleUserSignIn: action,
      handleUserSignUp: action,
    });
  }

  handleCheckToken = async (navigate: NavigateFunction) => {
    try {
      await axios.get(`${import.meta.env.VITE_URL}/auth`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });
      navigate("/main");
    } catch (e) {}
  };

  handleUserSignIn = async (email: string, password: string) => {
    try {
      const { data: token } = await axios.post(
        `${import.meta.env.VITE_URL}/auth/signin`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      setCookie("accessToken", token, {
        secure: true,
        sameSite: "strict",
      });

      this.isLogin = true;
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
