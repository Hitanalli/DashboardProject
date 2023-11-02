import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html',
  styleUrls: ['./top-cards.component.css']
})
export class TopCardsComponent {
  topCardDetails: any;

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void {
    this.getTopCards();
  }

  getTopCards(){
    this.apiService.getRequest().subscribe((result:any)=>{
      this.topCardDetails= result.top_cards;
      console.log(result.top_cards);
    })
  }

}
