import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export interface Client {
  value: string;
  viewValue: string;
}
export interface Region {
  value: string;
  viewValue: string;
}
export interface SolutionExecutive {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.scss']
})
export class AddprojectComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  clients: Client[] = [
    {value: 'mr-0', viewValue: 'Mr.'},
    {value: 'mrs-1', viewValue: 'Mrs.'}
  ];
  regions: Region[] = [
    {value: 'bangalore-0', viewValue: 'Bangalore'},
    {value: 'hyderabad-1', viewValue: 'Hyderabad'}
  ];
  solutionExecutives: SolutionExecutive[] = [
    {value: 'opt-0', viewValue: 'Option 1'},
    {value: 'opt-1', viewValue: 'Option 2'}
  ];
  startDate = new Date(1990, 0, 1);
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
}