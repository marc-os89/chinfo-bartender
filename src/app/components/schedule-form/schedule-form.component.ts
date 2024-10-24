import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { FormsModule } from '@bruno-bombonate/ngx-forms';

@Component({
  selector: 'app-schedule-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    FormsModule
  ],
  templateUrl: './schedule-form.component.html',
  styleUrl: './schedule-form.component.css'
})
export class ScheduleFormComponent {
  public form = new FormGroup({
    name: new FormControl<null | string>(null, [Validators.required]),
    cellPhone: new FormControl<null | string>(null, [Validators.required]),
    date: new FormControl<null | string>(null, [Validators.required]),
    duration: new FormControl<null | string>(null, [Validators.required]),
    description: new FormControl<null | string>(null, [Validators.required])
  })

  public controlErrorMessageIsVisible(abstractControl: AbstractControl) {
    if(abstractControl.touched || abstractControl.dirty) {
      return true;
    }
    return false;
  }

  public handleNgSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log(this.form.value)
    }
  }
}
