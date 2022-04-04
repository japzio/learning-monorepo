import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-act03instructor',
  templateUrl: './act03instructor.component.html',
  styleUrls: ['./act03instructor.component.css']
})
export class Act03instructorComponent implements OnInit {

  showSecret = false;
  log: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSecret() {let count: number = this.log.length
    this.showSecret= !this.showSecret;
    this.log.push(this.log.length + 1);
  }

}
