import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  panelOpenState = false;
  fil: any = {per:"", run:"", start:"", end:""}
  dataper=[1,2,3,4,5,6,7];
  private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };

  ngOnInit(): void {
  }
  toggleDisabled() {
  }
}
