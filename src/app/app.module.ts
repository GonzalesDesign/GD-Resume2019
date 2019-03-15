
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

import { AppComponent } from './app.component';
// import { ResumeComponent } from './resume/resume.component';
// import { ExperienceComponent } from './resume/experience/experience.component';
// import { Resume2Component } from './resume2/resume2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*---= MAT Material Modules =---*/
// import { MatModule } from './mat.module';
import { MaterialModule } from './material.module';
/*---= Routing Module =---*/
import { AppRoutingModule, routingComponents } from './app-routing.module';
// import { AnchorComponent } from './resume3/anchor/anchor.component';
// import { Resume3Component } from './resume3/resume3.component';
// import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    // ResumeComponent,
    // ExperienceComponent,
    // Resume2Component
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // MatModule,
    MaterialModule,
    AppRoutingModule
  ],
  // entryComponents: [Resume2Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
