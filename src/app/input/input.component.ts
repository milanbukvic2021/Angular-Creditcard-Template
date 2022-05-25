import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: any;
  @Input() label: any;

  //@Input() label1: any;
  //@Input() control1: any;

  constructor() {}

  ngOnInit() {}
  /*
  showErrors2() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }

  showErrors1() {
    const { dirty, touched, errors } = this.control;
    return dirty & touched & errors;
  }
 */
  showErrors() {
    //const { dirty, touched, errors } = this.control;
    const dirty = this.control.dirty;
    const touched = this.control.touched;
    const errors = this.control.errors;
    return touched && dirty && errors;
  }
}
