import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import{Offer} from './offer';
import {map} from 'rxjs/operators';
import { HttpModule } from '@angular/http';

//import 'rxjs/add/operator/map';
//import 'rxjs/Rx';
//import 'rxjs@6.2.2/add/operator/map';
@Injectable()

export class OfferService {

  constructor(private http:Http) { }
//retreiving offers

getOffers()
{

  return this.http.get('http://localhost:3000/api/offers')
  .pipe(map( res => res.json()));
}


}
