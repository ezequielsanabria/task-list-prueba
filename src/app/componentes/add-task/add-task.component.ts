import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from "../../task";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
text:string ='';
day:string = '';
remainder:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.text.length === 0 ){
      alert("error");
      return
    }
    const{text,day,remainder}=this
    const newTask={text,day,remainder}

    this.onAddTask.emit(newTask)
  }
   
  
}