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


  fil: any = {per:"", run:"", start:"", end:"",stime:"",etime:""}
  dataper=[1,2,3,4,5,6,7];
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };
  public useDefault = false;

  minValue: Date;
  maxValue: Date;
  defaultValue: Date;

  showOnDirtyErrorStateMatcher = new ShowOnDirtyErrorStateMatcher();
  customErrorStateMatcher = new CustomErrorStateMatcher();
//

  form: FormGroup;
  checked: boolean = false;
  checked2 = false;
  parameter="";start;end;
  checked3: boolean = false;
  panelOpenState = true;
  panelOpenState2 = false;
  isCountrySelected:boolean=false;selected;
  imgview: boolean =false;
  toogle(){
    this.panelOpenState = !this.panelOpenState;
    this.panelOpenState2 = !this.panelOpenState2;
  }
  change(e) {
    this.checked = !this.checked;
    this.isCountrySelected=!this.isCountrySelected;
    if (this.checked) {
      console.log("open");
      this.panelOpenState = !this.panelOpenState;
      this.panelOpenState2 = !this.panelOpenState2;
    } else {
      console.log("close");
      this.checked = true;
      this.panelOpenState = !this.panelOpenState;
      this.panelOpenState2 = !this.panelOpenState2;
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

  ngOnInit(): void {
    this.panelOpenState = true;
    this.panelOpenState2 = false;
    setTimeout(()=>{
      this.fil={per:'7',run:'2041', start:'03/04/2018 04:25:17', end:'03/04/2018 13:55:33'};this.selected="7";
      this.parameter="mpd/bmn/adc_bman_beam/ch0";
      this.show();
 }, 1400);
  }
  show(){
    if (!!this.fil.start){
      this.start=moment(this.fil.start).format('DD/MM/YYYY')+"  04:25:17";
    }
    if (!!this.fil.end){
      this.end=moment(this.fil.end).format('DD/MM/YYYY')+ "  13:55:33";

    }
    if(!!this.fil.start && !!this.fil.end){
      this.end=" - "+moment(this.fil.end).format('DD/MM/YYYY')+ "  13:55:33";
    }

    this.imgview=true;
  }
  reset(){
    this.fil= {per:"", run:"", start:"", end:"",stime:"",etime:""};
    this.panelOpenState = true;
    this.panelOpenState2 = false;
    this.checked= false;
    this.checked2= false;
    this.checked3= false;
    this.parameter="";
    this.start=""; this.end="";
    this.isCountrySelected = false;
  }
/*   public toggle(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault = event.checked;
    this.panelOpenState = true;
    this.panelOpenState1 = false;
  } */
}
