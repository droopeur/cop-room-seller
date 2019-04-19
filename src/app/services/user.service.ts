import { Injectable } from "@angular/core";
// import 'rxjs/add/operator/toPromise';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {
  public user
  constructor(
    public db: AngularFirestore,
    public afAuth: AngularFireAuth
  ){
  }

  getCurrentUser(){
    return new Promise<any>((resolve, reject) => {
      var user = firebase.auth().onAuthStateChanged(function(user){
        if (user) {
          resolve(user);
          this.user = user
        } else {
          reject('No user logged in');
        }
      })
    })
  }
  getName() {
    return {
      firstname : this.user.email.split('@')[0].split('.')[0],
      lastname : this.user.email.split('@')[0].split('.')[1]
    }


  }
  // updateCurrentUser(value){
  //   return new Promise((resolve, reject) => {
  //     var user = firebase.auth().currentUser;
  //     user.updateProfile({
  //       displayName: value.name,
  //       photoURL: user.photoURL
  //     }).then(res => {
  //       resolve(res)
  //     }, err => reject(err))
  //   })
  // }
}
