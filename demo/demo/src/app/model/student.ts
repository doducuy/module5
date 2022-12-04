import {ClassStudent} from './class-student';

export interface Student {
  id?:number;
  name:string;
  gender:number;
  point?: number;
  className?: ClassStudent;
}
