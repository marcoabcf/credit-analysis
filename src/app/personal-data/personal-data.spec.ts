import { CdkStepper } from '@angular/cdk/stepper';
import { Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalDataComponent } from './personal-data.component';

describe('PersonalDataComponent', () => {
  let component: PersonalDataComponent;
  let fixture: ComponentFixture<PersonalDataComponent>;
  let mockRenderer: jasmine.SpyObj<Renderer2>;
  let mockStepper: jasmine.SpyObj<CdkStepper>;
  let formGroup: FormGroup;

  beforeEach(async () => {
    mockRenderer = jasmine.createSpyObj('Renderer2', [
      'addClass',
      'removeClass',
    ]);
    mockStepper = jasmine.createSpyObj('CdkStepper', ['next', 'previous']);

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        NoopAnimationsModule,
        PersonalDataComponent,
      ],
      providers: [
        { provide: Renderer2, useValue: mockRenderer },
        { provide: CdkStepper, useValue: mockStepper },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalDataComponent);
    component = fixture.componentInstance;

    const fb = TestBed.inject(FormBuilder);
    formGroup = fb.group({
      fullName: [''],
      cpf: [''],
      dateOfBirth: [''],
    });
    component.form = formGroup;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call goToLocationData and update body classes correctly', () => {
    component.goToLocationData();

    expect(mockStepper.next).toHaveBeenCalled();
  });

  it('should call goToInit and reset the form and body classes correctly', () => {
    spyOn(component.form, 'reset');

    component.goToInit();

    expect(component.form.reset).toHaveBeenCalled();
    expect(mockStepper.previous).toHaveBeenCalled();
  });

  it('should render input fields for fullName, cpf, and dateOfBirth', () => {
    const fullNameInput = fixture.debugElement.query(
      By.css('[formControlName="fullName"]')
    );
    const cpfInput = fixture.debugElement.query(
      By.css('[formControlName="cpf"]')
    );
    const dateOfBirthInput = fixture.debugElement.query(
      By.css('[formControlName="dateOfBirth"]')
    );

    expect(fullNameInput).not.toBeNull();
    expect(cpfInput).not.toBeNull();
    expect(dateOfBirthInput).not.toBeNull();
  });

  it('should render buttons for "Desistir" and "Avançar"', () => {
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    const desistirButton = buttons.find((btn) =>
      btn.nativeElement.textContent.includes('Desistir')
    );
    const avancarButton = buttons.find((btn) =>
      btn.nativeElement.textContent.includes('Avançar')
    );

    expect(desistirButton).not.toBeNull();
    expect(avancarButton).not.toBeNull();
  });

  it('should invoke goToInit when "Desistir" button is clicked', () => {
    spyOn(component, 'goToInit');
    const desistirButton = fixture.debugElement.query(
      By.css('button:first-child')
    ).nativeElement;
    desistirButton.click();

    expect(component.goToInit).toHaveBeenCalled();
  });

  it('should invoke goToLocationData when "Avançar" button is clicked', () => {
    spyOn(component, 'goToLocationData');
    const avancarButton = fixture.debugElement.query(
      By.css('button:last-child')
    ).nativeElement;
    avancarButton.click();

    expect(component.goToLocationData).toHaveBeenCalled();
  });
});
