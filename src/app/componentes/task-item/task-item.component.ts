import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/task';
import { TASKS } from 'src/app/mosck-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
@Input() task: Task= TASKS[0];
faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
