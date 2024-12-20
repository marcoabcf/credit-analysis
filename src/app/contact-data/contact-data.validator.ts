import { Validators } from '@angular/forms';

export const ContactDataValidator = {
  phone: ['', [Validators.required, Validators.pattern(/^\d{9,11}$/)]],
  email: ['', [Validators.required, Validators.email]],
};
