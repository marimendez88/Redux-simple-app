import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/user.action';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  uploadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.uploadUser),
      mergeMap((action) =>
        this.userService.getUserById(action.id).pipe(
          map((user) => userActions.uploadUserSuccess({ user })),
          catchError((err) => of(userActions.uploadUserError({ payload: err })))
        )
      )
    )
  );
}
