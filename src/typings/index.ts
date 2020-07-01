export interface fetchParam extends RequestInit {
  timeout?: number;
  data?: any;
}

export interface Map {
  [key: string]: any;
  [index: number]: any;
}

export interface Item {
  id: number;
  value: string;
  completed: boolean;
  created_time?: number;
  updated_time?: number;
  user?: string;
}

export interface addToDo {
  type: string;
  value: string;
  id?: number;
}

export interface GetListAction {
  type?: string;
  data: Item[];
}
