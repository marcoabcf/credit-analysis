import { CdkStepper } from '@angular/cdk/stepper';
import { Component, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private renderer: Renderer2, private stepper: CdkStepper) {}

  goToPersonalData() {
    this.renderer.addClass(document.body, 'bg-1');
    this.stepper.next();
  }
}
