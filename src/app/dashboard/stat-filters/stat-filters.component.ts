import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})

export class StatFiltersComponent implements OnInit {

  details: FormGroup;

  constructor(fb: FormBuilder) {
    this.details = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // //email: ['', Validators.email, Validators.required],
      region: ['', Validators.required]
    });
  }


  ngOnInit() {
  }

  save() {
    console.log(this.details.value);
  }

}
