import { Component, Input, OnInit } from '@angular/core';
import { Status, Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit{
  @Input() task!: Task;
  @Input() index!: number;

  constructor(private taskService: TaskService){}

  ngOnInit(): void {
  }

  notCompleted(){return this.task.status === Status.ToDo}

  updateStatus(){
    this.taskService.changeStatus(this.index)
  }

  onDeleteTask(){
    this.taskService.deleteTask(this.index)
  }
}
