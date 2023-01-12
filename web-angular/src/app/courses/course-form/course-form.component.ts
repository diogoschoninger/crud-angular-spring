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
    private snackbar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
    });
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(
        res => console.log(res),
        err => this.snackbar.open('Erro ao salvar o curso.', 'Fechar'),
      );
  }

  onCancel() { }
}
