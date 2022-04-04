import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4, v4 } from 'uuid';

@Component({
  selector: 'app-act03',
  templateUrl: './act03.component.html',
  styleUrls: ['./act03.component.css']
})
export class Act03Component implements OnInit {

  pVisibility = false;
  clickEventsList: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick(e: Event) {
    let clickUuid: string = uuidv4();
    console.log("click-id - " + clickUuid);
    this.clickEventsList.push(clickUuid);
    this.pVisibility = this.pVisibility === false ? true : false;
  }

}
