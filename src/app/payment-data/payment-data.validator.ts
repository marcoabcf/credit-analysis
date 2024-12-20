import { Validators } from '@angular/forms';

export const PaymentDataValidator = {
  income: ['', [Validators.required, Validators.min(0)]],
  incomeSource: ['Assalariado', Validators.required],
};
