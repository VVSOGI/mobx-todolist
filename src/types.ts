export interface TodoContentType {
  id: number | string;
  todoText: string;
  isCheckedTodo: boolean;
  color?: Colors;
  date?: Date;
  userId: string;
}

export type Colors =
  | "#ea3232"
  | "#ea7632"
  | "#ffd500"
  | "#229c2c"
  | "#2159d1"
  | "#8221d1";
