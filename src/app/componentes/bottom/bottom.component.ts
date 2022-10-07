import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

  @Input () text:string= '';
  @Input () color:string= '';
  @Output () btnClick = new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
   this.btnClick.emit();
  }

}
