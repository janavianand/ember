import Service,{ inject as service} from '@ember/service';
import Router from '@ember/routing/router'
import { action } from '@ember/object';

const USER_ID_KEY = 'shalack-userid'

export default class AuthService extends Service {
  /**
   * @type {Router}
   */
    //Routes the user to the particular page

   @service router

   //Readin and writing to local storage
  _writeUserId(userId){
    window.localStorage.setItem(USER_ID_KEY,userId)
  }
  _readUserId(){
    return window.localStorage.getItem(USER_ID_KEY)
  }

  get currentUserId(){
    return this._readUserId();
  }

  loginWithUserId(userId){
    this._writeUserId(userId)
    this.router.transitionTo('teams')
  }

  @action
  logout(evt){
    if(evt) evt.preventDefault()
    this._writeUserId('')
    this.router.transitionTo('login')
  }
}
