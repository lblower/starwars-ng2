import { Component } from '@angular/core';
import {PeopleService} from './people.service';
import { StarwarsService } from './services/starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [ {provide:'IPeopleService', useClass: PeopleService}, StarwarsService]
})
export class AppComponent {
  title = 'Stars Wars PLZZ...!';
}
