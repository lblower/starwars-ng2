import {Component, OnInit , Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styles: []
})
export class PersonDetailsComponent implements OnInit {


 @Input() person: Person ;


  constructor() { }

  ngOnInit() {
  }

}
