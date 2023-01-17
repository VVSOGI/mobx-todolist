export interface TodoContentType {
  id: number | string;
  todolist_contents: string;
  isCheckedTodo: boolean;
  todolist_color?: Colors;
  todolist_date?: Date;
}

export type Colors =
  | "#ea3232"
  | "#ea7632"
  | "#ffd500"
  | "#229c2c"
  | "#2159d1"
  | "#8221d1";
