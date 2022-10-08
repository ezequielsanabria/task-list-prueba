import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
private showAddTask:boolean=false;
private Subject= new  Subject <any>();

  constructor() { }

  ToggleAddTask():void {
    this.showAddTask= !this.showAddTask;
    this.Subject.next(this.showAddTask);

  }

  onToggle(): Observable<any>{
    return this.Subject.asObservable();
}
}