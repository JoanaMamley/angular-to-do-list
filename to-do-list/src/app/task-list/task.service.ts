import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task, Status } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    new Task("Study", Status.ToDo),
    new Task("Take some rest", Status.ToDo),
 ];

constructor() { }

 tasksChanged = new Subject<Task[]>()

 
 onAddTask(task: Task){
     this.tasks.push(task);
     this.tasksChanged.next(this.tasks);
 }

 getTasks(){
    return this.tasks.slice();
 }

 deleteTask(index: number){
     this.tasks.splice(index, 1);
     this.tasksChanged.next(this.tasks.slice())
 }

 changeStatus(index: number){
    let task: Task = this.tasks[index];
    task.status = Status.Completed;
    this.tasksChanged.next(this.tasks.slice())
 }
}
