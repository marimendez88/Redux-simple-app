import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const uploadUser = createAction(
  '[User] uploadUser',
  props<{ id: string }>()
);

export const uploadUserSuccess = createAction(
  '[User] uploadUserSuccess',
  props<{ user: User }>()
);

export const uploadUserError = createAction(
  '[User] uploadUserError',
  props<{ payload: any }>()
);
