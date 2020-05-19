import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  edit_mode:boolean = false;

  constructor(private Route:ActivatedRoute) { }

  ngOnInit(): void {
    this.Route.params
     .subscribe((params:Params) =>{
        this.id = +params['id'];
        this.edit_mode = params['id'] != null;
     })

  }

}
