import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions/users.action';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  uploadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.uploadUsers),
      mergeMap(() =>
        this.userService.getUser().pipe(
          map((users) => usersActions.uploadUsersSuccess({ users })),

          catchError((err) =>
            of(usersActions.uploadUsersError({ payload: err }))
          )
        )
      )
    )
  );
}
