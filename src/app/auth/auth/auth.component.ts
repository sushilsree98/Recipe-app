import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLogging: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSwitch(){
    this.isLogging = !this.isLogging;
  }

  onSubmit(form:NgForm){
    console.log(form.value);
  }
}
