import { Injectable } from '@angular/core';
import { UserDomain } from './userDomain';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    users: UserDomain[] = [];

    constructor(public location: Location) { }

    /* A common use of JSON is to exchange data to/from a web server.
    When sending data to a web server, the data has to be a string.
    Convert a JavaScript object into a string with JSON.stringify(). */

    saveUser(user: UserDomain) {
        user.id = user.name;
        this.users.push(user);
        const jsonStringData = JSON.stringify(this.users);
        localStorage.setItem('users', jsonStringData);
        window.alert('User Save Successfully');
        this.goToPrevPage();
    }

    getAllUsers() {
        if (localStorage.getItem('users') != null) {
            const text = localStorage.getItem("users");
            if (text != null) {
                let jsObj = JSON.parse(text);
                return this.users = jsObj;
            } else {
                return [];
            }
        } else {
            return [];
        }
    }

    getUserById(id: any) {
        this.getAllUsers();
        if (this.users.length > 0) {
            if (this.users.some(u => u.id == id)) {
                return this.users.find(u => u.id == id);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

    deleteUserById(id: any) {
        this.getAllUsers();
        if (this.users.length > 0) {
            if (this.users.some(u => u.id == id)) {
                this.users = this.users.filter((item) => item.id !== id);
                const jsonStringData = JSON.stringify(this.users);
                localStorage.setItem('users', jsonStringData);
                window.alert('User Delete Successfully');
                this.refreshPage();
            } else {
                window.alert('Error While Deleting User !!!');
            }
        } else {
            window.alert('Error While Deleting User !!!');
        }
    }

    updateUser(user: UserDomain) {
        this.getAllUsers();
        if (this.users.length > 0) {
            if (this.users.some(u => u.id == user.id)) {
                const index = this.users.findIndex(t => t.id === user.id);
                this.users.splice(index, 1);
                this.users.push(user);
                const jsonStringData = JSON.stringify(this.users);
                localStorage.setItem('users', jsonStringData);
                window.alert('User Update Successfully');
                this.goToPrevPage();
            } else {
                window.alert('Error While Updating User !!!');
            }
        } else {
            window.alert('Error While Updating User !!!');
        }
    }

    goToPrevPage() {
        this.location.back();
    }

    refreshPage(){
        window.location.reload();
    }

}
