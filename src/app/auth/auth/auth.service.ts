import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface signUpResponse {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient) { }

  signUp(email, password){
    return this.http.post<signUpResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBC4-kwDlgWZEnvCk2W_1yYzuEugu6bi1s",
    {
      email : email,
      password : password,
      returnSecureToken : true
    }
    )
  }
}
