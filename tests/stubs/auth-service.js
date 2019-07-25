import AuthService from "shlack/services/auth";

export default class StubAuthService extends AuthService{
  _uid = null
  _readUserId(){
    return this._uid;
  }
  _writeUserId(userId){
    this._uid = userId;
  }

  setUserId(uid){
    this._uid = uid
  }
}
