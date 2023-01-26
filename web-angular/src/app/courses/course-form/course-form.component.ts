import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form = this.formBuilder.group({
    name: [''],
    category: [''],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackbar: MatSnackBar,
    private location: Location,
  ) { }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(
        res => this.onSuccess(),
        err => this.onError(),
      );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackbar.open('Curso adicionado com sucesso');
    this.onCancel();
  }

  private onError() {
    this.snackbar.open('Erro ao salvar o curso.');
  }
}
