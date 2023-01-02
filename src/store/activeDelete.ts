import { action, makeAutoObservable, makeObservable, observable } from "mobx";

export class ActiveDelete {
  activeDelete: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  handleActiveDelete = () => {
    return (this.activeDelete = !this.activeDelete);
  };
}

export const activeDeleteState = new ActiveDelete();
