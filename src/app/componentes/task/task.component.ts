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

  deleteTask(task: Task){
    this.taskservice.deleteTask(task).subscribe(()=>(
      this.tasks = this.tasks.filter(t=>t.id !== task.id)
    ))
  }

  toggleRemainder(task: Task){
   task.remainder = !task.remainder,
  this.taskservice.updatetaskRemainder(task).subscribe();
   
  }
  AddTask(task: Task){
   this.taskservice.AddTask(task).subscribe((task)=>(
    this.tasks.push(task)
   ));
  }
}
