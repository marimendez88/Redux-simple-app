import { createReducer, on } from '@ngrx/store';
import { uploadUsers, uploadUsersError, uploadUsersSuccess } from '../actions';

export interface UsersState {
  users: [];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const UsersInitialState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

const _usersReducer = createReducer(
  UsersInitialState,
  on(uploadUsers, (state) => ({ ...state, loading: true })),

  on(uploadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...users],
  })),

  on(uploadUsersError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload,
  }))
);

export function usersReducer(state, action) {
  return _usersReducer(state, action);
}
