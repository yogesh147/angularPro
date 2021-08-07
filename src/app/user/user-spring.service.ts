import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

// Use to connect with spring boot and mongo service 

export class UserSpringService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = 'http://localhost:8080/api/user';
    }

    async saveUser(user: any) {
        return await this.http.post<any>(this.url, user).toPromise();
    }

    async getAllUsers() {
        return await this.http.get<any>(this.url).toPromise();
    }

    async getUserById(id: any) {
        const headers: any = { 'id': id };
        return await this.http.get<any>(this.url, { headers : headers }).toPromise();
    }

    async updateUser(user: any) {
        return await this.http.put<any>(this.url, user).toPromise();
    }

    async deleteUser(id: any) {
        const params: any = { 'id': id };
        return await this.http.delete<any>(this.url, { params }).toPromise();
    }

}
