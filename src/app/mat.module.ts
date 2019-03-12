/******************************************************
* Project: R.Lloyd Gonzales Portfolio Website
* Platform: Angular 6
* Module Name: Angualr Material Module:
* Note: Import to App Module. Use for "resume2"
******************************************************/

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {MatToolbarModule} from '@angular/material/toolbar';

// @NgModule({
//   imports: [
//     CommonModule,
//     MatToolbarModule
//   ],
//   declarations: []
// })
// export class MatModule { }

import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialModules = [
  MatDialogModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule
];

@NgModule({

  imports: [
      materialModules
    ],

  exports: [
      materialModules
    ]

})

export class MatModule { }
