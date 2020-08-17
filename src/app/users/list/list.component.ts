import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  users: User[] = [];
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((s_users) => {
      console.log(s_users);
      this.users = s_users;
    });
  }
}
