import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-candyidea',
  templateUrl: './candyidea.page.html',
  styleUrls: ['./candyidea.page.scss'],
})
export class CandyideaPage implements OnInit {
  candyForm: FormGroup;
  
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.candyForm = this.fb.group({
      name: ['', Validators.required],
      ingredients: this.fb.array([
        this.fb.control('')
      ])
    });
  }

  submitCandy(){
    console.log("test");
  }

  addingre(){
    this.ingredients.push(this.fb.control(''));
  }

  get ingredients() {
    return this.candyForm.get('ingredients') as FormArray;
  }
  
}
