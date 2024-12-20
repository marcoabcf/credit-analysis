import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Input, Renderer2 } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-location-data',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './location-data.component.html',
  styleUrl: './location-data.component.scss',
})
export class LocationDataComponent {
  @Input() form!: FormGroup;

  constructor(private renderer: Renderer2, private stepper: CdkStepper) {}

  goToContactData() {
    this.renderer.removeClass(document.body, 'bg-1');
    this.renderer.addClass(document.body, 'bg-2');
    this.stepper.next();
  }

  goBackToStepper() {
    this.renderer.removeClass(document.body, 'bg-2');
    this.renderer.addClass(document.body, 'bg-1');
    this.stepper.previous();
  }
}
