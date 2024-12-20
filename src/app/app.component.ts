import { Component } from '@angular/core';
import { TemplateComponent } from './template/template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TemplateComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
