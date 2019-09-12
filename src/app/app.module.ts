import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule,RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { TDFComponent } from './tdf/tdf.component';
import { MDFComponent } from './mdf/mdf.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { VSMComponent } from './vsm/vsm.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './drag-drop/drag-drop.component';
// import { TranslateLoader,TranslateModule } from '@ngx-translate/core'
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    TDFComponent,
    MDFComponent,
    RoutingComponent,
    // VSMComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollDispatchModule,
    DragDropModule,
    // TranslateModule.forRoot(
    //   {
    //     loader:{
    //       provide:TranslateLoader,
    //       useFactory:HttpLoadFactory,
    //       deps: [HttpClient]
    //     }
    //   }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function HttpLoadFactory(http:HttpClient){
//   return new TranslateHttpLoader(http);
// }
