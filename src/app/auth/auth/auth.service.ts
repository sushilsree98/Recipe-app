import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'

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
    return this.http.post<signUpResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]",
    {
      email : email,
      password : password,
      returnSecureToken : true
    }
    )
    .pipe(catchError(err=>{
      let error_message = "An Unknown Error Occurred";
      if(!err.error || !err.error.error){
        return throwError(error_message);
      }else{
        switch(err.error.error.message){
          case 'EMAIL_EXISTS':
            error_message = "This Email already exists";
        }
      }
      return throwError(error_message);
    }))
  }
}
