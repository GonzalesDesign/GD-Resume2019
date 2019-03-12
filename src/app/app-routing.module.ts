
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ExperienceComponent } from './resume/experience/experience.component';
import { Resume2Component } from './resume2/resume2.component';

const routes: Routes = [
    { path: '', redirectTo: '/resume2', pathMatch: 'full' },
    { path: 'resume', component: ResumeComponent },
    { path: 'resume2', component: Resume2Component }
];

@NgModule({

    imports: [ RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollOffset: [0, 50], // [x, y]
    }) ],

    exports: [ RouterModule ]

})
export class AppRoutingModule {}
export const routingComponents = [ResumeComponent, ExperienceComponent, Resume2Component];
