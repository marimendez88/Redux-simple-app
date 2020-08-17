import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const uploadUsers = createAction('[Users] uploadUsers');

export const uploadUsersSuccess = createAction(
  '[Users] uploadUsersSuccess',
  props<{ users: User[] }>()
);

export const uploadUsersError = createAction(
  '[Users] uploadUsersError',
  props<{ payload: any }>()
);
