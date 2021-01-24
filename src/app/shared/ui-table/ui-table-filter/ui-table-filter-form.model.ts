import { FormControl, FormGroup } from '@angular/forms';

export class UiTableFilterForm extends FormGroup {
  controls: {
    filter: FormControl;
  };
}
