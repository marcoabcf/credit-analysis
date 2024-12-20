import { CdkStepper } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact-data',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './contact-data.component.html',
  styleUrl: './contact-data.component.scss',
})
export class ContactDataComponent {
  @Input() form!: FormGroup;

  constructor(private renderer: Renderer2, private stepper: CdkStepper) {}

  goToPaymentData() {
    this.renderer.removeClass(document.body, 'bg-2');
    this.renderer.addClass(document.body, 'bg-3');
    this.stepper.next();
  }

  goBackToStepper() {
    this.renderer.removeClass(document.body, 'bg-3');
    this.renderer.addClass(document.body, 'bg-2');
    this.stepper.previous();
  }
}
