import { Validators } from '@angular/forms';

export const PersonalDataValidator = {
  fullName: ['', [Validators.required, Validators.minLength(3)]],
  cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
  dateOfBirth: ['', Validators.required],
  city: ['', Validators.nullValidator],
  state: ['', Validators.nullValidator],
};
