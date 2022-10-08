import { Component, OnInit } from '@angular/core';
import {UiServiceService} from '../../service/ui-service.service'
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string= 'task.list';
  showAddTask:boolean =false;
  subscription?:Subscription;
  constructor(
    private uiservice:UiServiceService
  ) { 

    this.subscription = this.uiservice.onToggle()
                                        .subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
   this.uiservice.ToggleAddTask();
  }
}
