import { CdkStepper } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-payment-data',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './payment-data.component.html',
  styleUrl: './payment-data.component.scss',
})
export class PaymentDataComponent {
  @Input() form!: FormGroup;

  incomeSourceOptions: string[] = [
    'Assalariado',
    'Autônomo',
    'Empresário',
    'Outro',
  ];

  constructor(private renderer: Renderer2, private stepper: CdkStepper) {}

  goToPersonalData() {
    this.renderer.removeClass(document.body, 'bg-3');
    this.renderer.addClass(document.body, 'bg-4');
    this.stepper.next();
  }

  goBackToStepper() {
    this.renderer.removeClass(document.body, 'bg-4');
    this.renderer.addClass(document.body, 'bg-3');
    this.stepper.previous();
  }
}
