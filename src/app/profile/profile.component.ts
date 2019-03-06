import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: FormGroup;


  constructor(fb: FormBuilder) {
    this.profile = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleInitial: ['', Validators.required],
      position: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      status: ['Active', Validators.required],
      statusInactive: ['Inactive', Validators.required]
    });
  }

  ngOnInit() {
  }

  save() {
    console.log(this.profile.value);
  }

}
