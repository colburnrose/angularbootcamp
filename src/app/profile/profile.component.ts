import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: number;
  firstname: string;
  lastname: string;
  position: string;
  department: string;
  phoneNumber: string;
  email: string;
  status: string;

  // details: FormGroup;

  constructor() { }

  // constructor(fb: FormBuilder) {
  //   this.details = fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     middleInitial: ['', Validators.maxLength(1)],
  //     position: ['Sales', Validators.minLength(3)],
  //     department: [''],
  //     immediateSupervisor: [''],
  //     phoneNumber: ['', Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)],
  //     email: ['', [Validators.email, Validators.required]],
  //     status: ['Active', Validators.required]
  //   });
  // }

  ngOnInit() {
  }

}
