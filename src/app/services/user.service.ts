import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userBlock: any;
  constructor(private http: HttpClient) { }


  // showUser(){
  //   return this.userBlock = true;  
  // }

}
