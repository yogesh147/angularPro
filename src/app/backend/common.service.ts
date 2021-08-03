import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// Use express.js which is run on tip of node.js (a.k.o run time environment) and use mongoose to com=neect with db
// To run :- go to server.js file and run with "node server.js" cmd from terminal and run local ng project "npm start" 

export class CommonService {

  constructor(private http: HttpClient) { }

  saveUser(user: any) {
    return this.http.post('http://localhost:8080/api/SaveUser/', user).pipe(map((response: any) => { return response }));
  }

  GetAllUsers() {
    return this.http.get('http://localhost:8080/api/getUser/').pipe(map((response: any) => { return response }));
  }

  async deleteUser(id: any) {
    const params : any  =  { 'id': id };
    return await this.http.delete<any>('http://localhost:8080/api/deleteUser/', {params}).toPromise();
  }

  async GetUserById(id: any) {
    const params : any  =  { 'id': id };
    return await this.http.get<any>('http://localhost:8080/api/getUserById/', { params}).toPromise();
  }

  async updateUser(user: any) {
    return await this.http.put<any>('http://localhost:8080/api/updateUser/', user).toPromise();
  }

}
