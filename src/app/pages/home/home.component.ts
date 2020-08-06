import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import { ShowOnDirtyErrorStateMatcher, ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';


class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null) {
    return control.invalid;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { 
    const minValue = new Date();
    minValue.setHours(6);
    minValue.setMinutes(10);
    this.minValue = minValue;

    const maxValue = new Date();
    maxValue.setHours(18);
    maxValue.setMinutes(10);
    this.maxValue = maxValue;

    const d = new Date();
    d.setDate(1);
    d.setMonth(2);
    d.setHours(7);
    d.setMinutes(0);
    d.setSeconds(1);
    d.setMilliseconds(10);
    this.defaultValue = d;


    this.form = this.formBuilder.group({
      time: [this.defaultValue, Validators.required]
    });
  }
  panelOpenState = true;
  panelOpenState1 = false;

  fil: any = {per:"", run:"", start:"", end:"",stime:"",etime:""}
  dataper=[1,2,3,4,5,6,7];
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };
  public useDefault = false;

  minValue: Date;
  maxValue: Date;
  defaultValue: Date;

  showOnDirtyErrorStateMatcher = new ShowOnDirtyErrorStateMatcher();
  customErrorStateMatcher = new CustomErrorStateMatcher();
//moment(this.fil.start).format('YYYY-MM-DD')}

  form: FormGroup;
  checked: boolean = false;
  checked2: boolean = false;

  change(e) {
    if (this.checked) {
        this.checked = !this.checked;
        
        console.log("toggle")

    } else {
      this.checked = !this.checked;
      this.panelOpenState = !this.panelOpenState;
      this.panelOpenState1 = !this.panelOpenState1;
    }
  }
  change2(e) {
    if (this.checked2) {
        this.checked2 = !this.checked2;
        
        console.log("toggle")

    } else {
      this.checked2 = !this.checked2;
      }
  }
  togglePanel(){
    this.panelOpenState = !this.panelOpenState;
    this.panelOpenState1 = !this.panelOpenState1;
  }
  ngOnInit(): void {
  }
  reset(){
    this.fil= {per:"", run:"", start:"", end:"",stime:"",etime:""};
    this.panelOpenState = true;
    this.panelOpenState1 = false;
    this.checked= false;
    this.checked2= false;
  }
/*   public toggle(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault = event.checked;
    this.panelOpenState = true;
    this.panelOpenState1 = false;
  } */
}
