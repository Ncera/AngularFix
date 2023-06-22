import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


  
    options: string[] = ['Cape Town', 'KwaZulu Natal', 'North West'];

  
    startDate = new Date(1990, 0, 1);

}






