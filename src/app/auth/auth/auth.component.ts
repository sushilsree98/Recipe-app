import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLogging: boolean = false;
  isLoading: boolean = false;
  error: string = '';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSwitch(){
    this.isLogging = !this.isLogging;
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      return
    }
    this.isLoading = true;

    if(this.isLogging){
      //...
    }else{
      const mail = form.value.email;
      const password = form.value.password;
  
      this.authService.signUp(mail,password)
        .subscribe(res=>{
          console.log(res);
          this.isLoading = false;
        },err=>{
          this.isLoading = false;
          this.error = 'An error occured!';
        })
        
    }
  }
}
