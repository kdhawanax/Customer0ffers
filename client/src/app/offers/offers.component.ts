import { Component, OnInit } from '@angular/core';
import {OfferService} from '../offer.service';
import{Offer} from '../offer';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers:[OfferService]
})
export class OffersComponent implements OnInit {
offers:Offer[];
offer:Offer;
offer_name:string;
offer_type:string;
  constructor(private offerService: OfferService) { }


  ngOnInit() {
    this.offerService.getOffers()
    .subscribe(offers=>
   this.offers=offers);
  }

}
