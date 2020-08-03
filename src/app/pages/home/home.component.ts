import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  panelOpenState = true;
  panelOpenState1 = false;

  fil: any = {per:"", run:"", start:"", end:""}
  dataper=[1,2,3,4,5,6,7];
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };
  public useDefault = false;

  ngOnInit(): void {
  }
  togglePanel(){
    this.panelOpenState = !this.panelOpenState;
    this.panelOpenState1 = !this.panelOpenState1;
  }
  togglePanel1(){
    this.panelOpenState = true;
    this.panelOpenState1 = false;
  }
  public toggle(event: MatSlideToggleChange) {
    console.log('toggle', event.checked);
    this.useDefault = event.checked;
    this.panelOpenState = true;
    this.panelOpenState1 = false;
  }
}
