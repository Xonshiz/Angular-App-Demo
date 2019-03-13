import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface Title {
  value: string;
  viewValue: string;
}
export interface Location {
  value: string;
  viewValue: string;
}
export interface CenterOfExcellence {
  value: string;
  viewValue: string;
}
export interface BusinessLine {
  value: string;
  viewValue: string;
}
export interface ReportingTo {
  value: string;
  viewValue: string;
}
export interface SalaryINR {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  titles: Title[] = [
    {value: 'mr-0', viewValue: 'Mr.'},
    {value: 'mrs-1', viewValue: 'Mrs.'}
  ];
  businessLines: BusinessLine[] = [
    {value: 'opt-0', viewValue: 'Option 1'},
    {value: 'opt-1', viewValue: 'Option 2'}
  ];
  locations: Location[] = [
    {value: 'bangalore-0', viewValue: 'Bangalore'},
    {value: 'hyderabad-1', viewValue: 'Hyderabad'}
  ];
  reportingTo: ReportingTo[] = [
    {value: 'deepak-0', viewValue: 'Deepak'},
    {value: 'suresh-1', viewValue: 'Suresh'}
  ];
  centerOfExcellences: CenterOfExcellence[] = [
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
