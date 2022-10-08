import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
tasks: Task[] = [];
  constructor(
    private taskservice: TaskService
  ) { }

  ngOnInit(): void {
    
    this.taskservice.getTasks().subscribe((tasks) =>(
      this.tasks = tasks
    ));
  }
}
