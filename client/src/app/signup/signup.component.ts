import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private _userService: UserService) {}
  fields = [
    { type: 'text', name: 'username', placeholder: 'Username', icon: 'user' },
    { type: 'text', name: 'mail', placeholder: 'Email', icon: 'mail' },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Password',
      icon: 'lock-closed',
    },
    {
      type: 'password',
      name: 'password2',
      placeholder: 'Password Confirmation',
      icon: 'lock-closed',
    },
  ];
  ngOnInit(): void {
    this._userService.getUser().subscribe(data => console.log(data));
  }
}
