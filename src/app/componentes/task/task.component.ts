import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { TASKS } from '../../mosck-task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
tasks: Task[]= TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
