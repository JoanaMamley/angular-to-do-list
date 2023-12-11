import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Status, Task } from './task.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers:  [ TaskService ]
})
export class TaskListComponent implements OnInit, OnDestroy{
  tasks!: Task[]
  taskSubscription!: Subscription;

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
    this.taskSubscription = this.taskService.tasksChanged.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      }
    )
    this.tasks = this.taskService.getTasks()
  }

  onSubmit(form: NgForm){
    this.taskService.onAddTask(new Task(form.value.name, Status.ToDo))
    form.reset()
  }

  ngOnDestroy(): void {
    this.taskSubscription.unsubscribe();
  }

  notCompleted(task: Task){return task.status === Status.ToDo}


}
