import { Injectable } from '@angular/core';
import {  
    CanActivate, 
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import * as firebase from 'firebase';


@Injectable()
export class UserService implements CanActivate {
    userLoggedIn: boolean = false;
    loggedInUser: string;
    authUser: any;
    
    constructor( private router: Router ) {
        firebase.initializeApp({
            apiKey: "AIzaSyBWeD-f9AMIbi82maW2cy8uMpq1z_zpgVI",
            authDomain: "angular-blogpostapp.firebaseapp.com",
            databaseURL: "https://angular-blogpostapp.firebaseio.com",
            projectId: "angular-blogpostapp",
            storageBucket: "angular-blogpostapp.appspot.com",
            messagingSenderId: "855238322651"
        })
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
        let url: string = state.url;
        return this.verifyLogin(url);
    }   

    verifyLogin(url: string): boolean {
        if (this.userLoggedIn) { return true; }
                
        this.router.navigate(['/admin/login']);
        return false;
    }

    register(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(function(error) {
                alert(`${error.message} Please Try Again!`);
        });
    }

    verifyUser() {
        this.authUser = firebase.auth().currentUser;
        if (this.authUser) {

            alert(`Welcome ${this.authUser.email}`);
            this.loggedInUser = this.authUser.email;
            this.userLoggedIn = true;
            this.router.navigate(['/admin']);
        }
    }

    login(loginEmail: string, loginPassword: string) {
        firebase.auth().signInWithEmailAndPassword(loginEmail, loginPassword)
            .catch(function(error) {
                alert(`${error.message} Unable to login. Try again!`);
        });
    }

    logout(){
        this.userLoggedIn = false;
        firebase.auth().signOut().then(function() {
            alert(`Logged Out!`);

        }, function(error) {
            alert(`${error.message} Unable to logout. Try again!`);
        });
    }

}