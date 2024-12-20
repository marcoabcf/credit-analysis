import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { AnalysisResultComponent } from '../analysis-result/analysis-result.component';
import { ContactDataComponent } from '../contact-data/contact-data.component';
import { ContactDataValidator } from '../contact-data/contact-data.validator';
import { HomeComponent } from '../home/home.component';
import { PaymentDataComponent } from '../payment-data/payment-data.component';
import { PaymentDataValidator } from '../payment-data/payment-data.validator';
import { LocationDataComponent } from '../personal-data/location-data/location-data.component';
import { PersonalDataComponent } from '../personal-data/personal-data.component';
import { PersonalDataValidator } from '../personal-data/personal-data.validator';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    HomeComponent,
    PersonalDataComponent,
    PaymentDataComponent,
    AnalysisResultComponent,
    LocationDataComponent,
    ContactDataComponent,
  ],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent {
  personalDataForm = this._formBuilder.group(PersonalDataValidator);
  contactDataForm = this._formBuilder.group(ContactDataValidator);
  paymentDataForm = this._formBuilder.group(PaymentDataValidator);

  constructor(private _formBuilder: FormBuilder) {}
}
