export class Task{
    constructor(public name: string, public status: Status){}
}

export enum Status {
    ToDo,
    Completed
  }