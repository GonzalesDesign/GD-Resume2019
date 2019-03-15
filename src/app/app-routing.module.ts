

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { Resume2Component } from './resume2/resume2.component';
import { Resume3Component } from './resume3/resume3.component';
import { R3TopNavComponent } from './resume3/r3-top-nav/r3-top-nav.component';
import { R3ContentComponent } from './resume3/r3-content/r3-content.component';
import { AnchorComponent } from './resume3/anchor/anchor.component';
import { Resume4Component } from './resume4/resume4.component';
import { R4TopNavComponent } from './resume4/r4-top-nav/r4-top-nav.component';
import { R4ContentComponent } from './resume4/r4-content/r4-content.component';
import { R4FooterComponent } from './resume4/r4-footer/r4-footer.component';

const routes: Routes = [
    { path: '', redirectTo: '/resume2', pathMatch: 'full' },
    { path: 'resume', component: ResumeComponent },
    { path: 'resume2', component: Resume2Component },
    { path: 'resume3', component: Resume3Component },
    { path: 'resume3/anchor', component: AnchorComponent },
    { path: 'resume4', component: Resume4Component }
];

@NgModule({

    imports: [ RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollOffset: [0, 50], // [x, y]
    }) ],

    exports: [ RouterModule ],

    declarations: []

})
export class AppRoutingModule {}
export const routingComponents = [ResumeComponent,
                                  ExperienceComponent,
                                  Resume2Component,
                                  Resume3Component,
                                  R3TopNavComponent,
                                  R3ContentComponent,
                                  AnchorComponent,
                                  Resume4Component,
                                  Resume4Component,
                                  R4TopNavComponent,
                                  R4ContentComponent,
                                  R4FooterComponent
                                ];
