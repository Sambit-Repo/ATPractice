import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TDFComponent } from './tdf/tdf.component';
import { MDFComponent } from './mdf/mdf.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';


const routes: Routes = [
  {
    path:"tdf",
    component:TDFComponent
  },
  {
    path:"mdf",
    component:MDFComponent
  },
  // {
  //   path:"vsm",
  //   component:VSMComponent
  // },
  {
    path:"dnd",
    component:DragDropComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [TDFComponent,MDFComponent,DragDropComponent]