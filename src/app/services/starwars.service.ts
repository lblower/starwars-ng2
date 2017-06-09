import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StarwarsService {
  private clientSecret: string;

constructor(private _http: Http) {
console.log('In Service Calling Star Wars');
}

getPerson(personId: number = null ) {
try {

if ( personId == null ) {
  return this._http.get('http://swapi.co/api/people/1/').map(res => res.json());
} else {
  return this._http.get('http://swapi.co/api/people/' + personId).map(res => res.json());
}
} catch (e) {
console.warn('No Info Found');
return ;
}

}
getStarShip() {
  return this._http.get('http://swapi.co/api/ starships/9/').map(res => res.json());
}


}
