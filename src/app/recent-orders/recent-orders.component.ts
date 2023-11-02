import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.css']
})
export class RecentOrdersComponent {
  recentOrders: any;

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void {
    this.getRecentOrders();
  }

  getRecentOrders(){
    this.apiService.getRequest().subscribe((result:any)=>{
      this.recentOrders= result.recent_orders;
      console.log(result.recent_orders);
    })
  }
}
