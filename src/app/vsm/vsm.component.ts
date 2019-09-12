import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { TranslateService } from '@ngx-translate/core';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-vsm',
  templateUrl: './vsm.component.html',
  styleUrls: ['./vsm.component.css']
})
export class VSMComponent implements OnInit {


  private albumDetails;

  constructor(private myService: FetchDataService, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }


  ngOnInit() {
    let jsondata: any = [];

    this.myService.getData().subscribe(data => {

      data.forEach(element => {
        let output = this.switchLanguage(element);
        // this.albumDetails.push(outputs);
      });
    })

    //  jsondata = this.translate.instant(this.albumDetails);

    //  console.log(jsondata);
    //   console.log(typeof(jsondata));

    //  let jsondata:any ;
    //   this.myService.getData().forEach(data=>jsondata.push(data));

    //   console.log(jsondata);

    //  for(let i=0;i<jsondata.length;i++)
    //  {
    //    this.albumDetails.push(jsondata[i]);

    //  }

    //  console.log(this.albumDetails);
  }

  switchLanguage(data: Object) {
    let keys: Array<string> = Object.keys(data);
    let response: Map<string, string> = new Map<string, string>();
    keys.forEach(e => {

      response.set(e, data[e]);
    });
    return response;
  }
}
