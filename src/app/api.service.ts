import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl= "https://1.api.fy23ey05.careers.ifelsecloud.com/";

  constructor(private http:HttpClient) { }

  getRequest() {
		return this.http.get(this.apiUrl);
	}

}
