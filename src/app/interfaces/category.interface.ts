import {Imail} from "./mail.interface";

export interface ICategory{
  name: string;
  childs: IChild[];
}
export interface IChild{
  name: string;
}

export interface IData{
  categories: ICategory[];
  mails: Imail[];
}

export interface IDataJSON{
  stautus:number;
  message:string;
  data: IData;
}
