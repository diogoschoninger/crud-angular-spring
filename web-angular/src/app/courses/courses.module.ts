import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        duration: 5000,
      },
    },
  ],
})
export class CoursesModule { }
