import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  public personalDetails = [];

  constructor(private myService : FetchDataService) {
   }

  ngOnInit() {

    this.myService.getData().subscribe(data=>
      {
        this.personalDetails = Array.from(Object.keys(data), k =>data[k]);
        console.log(this.personalDetails);
      }
    )
  }

  // onDrop(event: CdkDragDrop<string[]>){
  //   if(event.previousContainer === event.container)
  //   {
  //     moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
  //   }
  //   else{
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  // }

}
