import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  gitUserDetails: any;
  gitUserRepo: any;

  url = 'https://api.github.com/users/'



  constructor(private http: HttpClient) { }


  getUserDetail(name: string) {
    return this.http.get(this.url + name)

  }


  getUserRepo(name: string) {
    return this.http.get(this.url + name + '/repos?per_page=100')

  }
}
