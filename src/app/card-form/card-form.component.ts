import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm1 = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(5),
    ]),
    expiration: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  //constructor() {}
  constructor() {}

  //ngOnInit() {
  //  console.log('App Works!');
  //}
  ngOnInit() {
    console.log('App works!');
  }
  x = this.cardForm.get('name');
  //onSubmit() {
  //  console.log('Form was submitted');
  //}
  onSubmit() {
    console.log('Form was submitted');
    console.log(
      this.cardForm.controls.name.value +
        this.cardForm.controls.cardNumber.value
    );
    console.log('ovo je x:' + this.x);
  }

  //onResetClick() {
  //  this.cardForm.reset();
  //  console.log('Reseted');
  //}
  onResetClick() {
    this.cardForm.reset();
    console.log('Reseted');
  }
}
