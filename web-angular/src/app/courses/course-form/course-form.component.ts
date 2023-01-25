import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackbar: MatSnackBar,
    private location: Location,
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

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
