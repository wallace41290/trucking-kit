import { Errors, Field } from './forms.interfaces';
import { props, createActionGroup, emptyProps } from '@ngrx/store';

export const formsActions = createActionGroup({
  source: 'Forms',
  events: {
    setData: props<{ data: Record<string, unknown> }>(),
    updateData: props<{ data: Record<string, unknown> }>(),
    setStructure: props<{ structure: Field[] }>(),
    setErrors: props<{ errors: Errors }>(),
    initializeErrors: emptyProps(),
    initializeForm: emptyProps(),
    resetForm: emptyProps(),
  },
});
