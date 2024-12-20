import { TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { HomeComponent } from '../home/home.component';
import { PersonalDataComponent } from '../personal-data/personal-data.component';
import { LocationDataComponent } from '../personal-data/location-data/location-data.component';
import { ContactDataComponent } from '../contact-data/contact-data.component';
import { PaymentDataComponent } from '../payment-data/payment-data.component';
import { AnalysisResultComponent } from '../analysis-result/analysis-result.component';

describe('TemplateComponent', () => {
  let component: TemplateComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatStepperModule,
        NoopAnimationsModule,
        HomeComponent,
        PersonalDataComponent,
        LocationDataComponent,
        ContactDataComponent,
        PaymentDataComponent,
        AnalysisResultComponent,
        TemplateComponent,
      ],
      providers: [FormBuilder],
    }).compileComponents();

    const fixture = TestBed.createComponent(TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize personalDataForm with the correct structure', () => {
    const controls = component.personalDataForm.controls;

    expect(controls).toBeDefined();
    expect(controls['fullName']).toBeDefined();
    expect(controls['cpf']).toBeDefined();
    expect(controls['dateOfBirth']).toBeDefined();
    expect(controls['city']).toBeDefined();
    expect(controls['state']).toBeDefined();

    // Verifica se os validadores estão configurados
    const fullNameValidators = controls['fullName']?.validator
      ? controls['fullName'].validator({} as any)
      : null;
    expect(fullNameValidators).toBeTruthy();

    const cpfValidators = controls['cpf']?.validator
      ? controls['cpf'].validator({} as any)
      : null;
    expect(cpfValidators).toBeTruthy();
  });

  it('should initialize contactDataForm with the correct structure', () => {
    const controls = component.contactDataForm.controls;

    expect(controls).toBeDefined();
    expect(controls['email']).toBeDefined();
    expect(controls['phone']).toBeDefined();

    const emailValidators = controls['email']?.validator
      ? controls['email'].validator({} as any)
      : null;
    expect(emailValidators).toBeTruthy();

    const phoneValidators = controls['phone']?.validator
      ? controls['phone'].validator({} as any)
      : null;
    expect(phoneValidators).toBeTruthy();
  });

  it('should initialize paymentDataForm with the correct structure', () => {
    const controls = component.paymentDataForm.controls;

    expect(controls).toBeDefined();
    expect(controls['income']).toBeDefined();
    expect(controls['incomeSource']).toBeDefined();

    const incomeValidators = controls['income']?.validator
      ? controls['income'].validator({} as any)
      : null;
    expect(incomeValidators).toBeTruthy();

    const incomeSourceValidators = controls['incomeSource']?.validator
      ? controls['incomeSource'].validator({} as any)
      : null;
    expect(incomeSourceValidators).toBeTruthy();
  });
});
