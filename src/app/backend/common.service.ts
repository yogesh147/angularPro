import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  deleteUser(id: any) {
    return this.http.post('http://localhost:8080/api/deleteUser/', { 'id': id }).pipe(map((response: any) => { return response }));
  }

  // GetUserById(id: any) {
  //   return this.http.get('http://localhost:8080/api/getUserById/', { 'id': id }).pipe(map((response: any) => response.json()));
  // }

}
