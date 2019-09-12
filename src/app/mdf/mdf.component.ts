import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MDFComponent implements OnInit {

  constructor() { }

  newemail;
  formdata;

  ngOnInit() {
    this.formdata = new FormGroup(
      {
        eid : new FormControl("",Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ])),
        pwd : new FormControl("",this.passWordValidation)
      } 
    )
  }

  passWordValidation(formControl){
    if(formControl.value.length < 5) { 
      return {"pwd":true};
  }
}

  onClickSubmit(data){
    this.newemail=data.eid;
  }

}
