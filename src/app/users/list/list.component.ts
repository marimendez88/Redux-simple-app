import { Component, OnInit } from '@angular/core';

import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { uploadUsers } from 'src/app/store/actions';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: User[] = [];
  loading: boolean = false;
  error: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('users').subscribe(({ users, loading, error }) => {
      this.users = users;
      this.loading = this.loading;
      this.error = error;
    });
    this.store.dispatch(uploadUsers());
  }
}
