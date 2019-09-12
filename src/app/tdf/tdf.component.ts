import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  email;

  onClickSubmit(data)
  {
    this.email=data.emailId;
    alert("The password entered is : "+data.password);
    alert("Please change yoyur password");
  }

}
