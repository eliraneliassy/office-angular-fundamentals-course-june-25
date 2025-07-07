import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../auth';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {map} from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  router = inject(Router);
  authService = inject(Auth);

  form = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    }
  )


  login() {
    this.authService.login(this.form.value.email)
    this.router.navigate(['/feed']);
  }

  constructor() {
    this.form.controls.email.valueChanges
      .pipe(

      )
      .subscribe(console.log)
  }
}
