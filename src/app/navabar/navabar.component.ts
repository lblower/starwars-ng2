import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent implements OnInit {
projectTitle: string;
  constructor() {
  this.projectTitle = 'Stars Wars';
}

  ngOnInit() {
  }

}
