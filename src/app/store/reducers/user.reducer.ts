import { createReducer, on } from '@ngrx/store';
import { uploadUser, uploadUserError, uploadUserSuccess } from '../actions';
import { User } from '../../models/user.model';

export interface UserState {
  id: string;
  user: User;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const UserInitialState: UserState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

const _userReducer = createReducer(
  UserInitialState,
  on(uploadUser, (state, { id }) => ({
    ...state,
    loading: true,
    id: id,
  })),

  on(uploadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...user },
  })),

  on(uploadUserError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
