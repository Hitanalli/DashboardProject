import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent {
  newUsers: any;


  constructor(private apiService: ApiService){

  }

  ngOnInit(): void {
    this.getnewUsers();
  }

  getnewUsers(){
    this.apiService.getRequest().subscribe((result:any)=>{
      this.newUsers= result.new_users;
      console.log(result.new_users);
    })
  }
}
