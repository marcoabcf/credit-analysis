import { CdkStepper } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-personal-data',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.scss',
})
export class PersonalDataComponent {
  @Input() form!: FormGroup;

  constructor(private renderer: Renderer2, private stepper: CdkStepper) {}

  goToLocationData() {
    this.renderer.removeClass(document.body, 'bg-1');
    this.renderer.addClass(document.body, 'bg-2');
    this.stepper.next();
  }

  goToInit() {
    this.form.reset();
    this.renderer.removeClass(document.body, 'bg-2');
    this.renderer.removeClass(document.body, 'bg-1');
    this.stepper.previous();
  }
}
