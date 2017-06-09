import { Component, OnInit } from '@angular/core';
import {Person} from '../person';
import {PeopleService} from '../people.service';
import { StarwarsService } from '../services/starwars.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
    people: Person[] ;
    selectedPerson: Person;
    personName: number;
    person: any[] ;
    constructor(private peopleService: PeopleService, private _starwarsService: StarwarsService) {
      this._starwarsService.getPerson().subscribe(person => {
      console.log(person);
      this.person = person;
      });
      this.personName = 1;
    }

  ngOnInit() {
     this.people = this.peopleService.getAll();
  }

  selectPerson(person) {
    this.selectedPerson = person;
  }
  searchPerson() {
    this._starwarsService.getPerson(this.personName).subscribe(person => {

    console.log(person.detail);
    this.person = person;
    });
  }

}
