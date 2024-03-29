import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: UntypedFormGroup;
  loading: boolean;
  submitted: boolean;
  error: string;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    this.loading = false;
    this.submitted = false;
    this.error = '';
    // if (this.authService.tokenValue) {
    //   this.router.navigate(['/']).then();
    // }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(isRegister: boolean) {
    this.submitted = true;
    if (this.loginForm.invalid) { return; }
    this.loading = true;
    this.authService.authenticate(this.f.username.value, this.f.password.value, isRegister)
      .subscribe(
        () => {
          location.reload();
        },
        (error) => {
          if (isRegister) this.error = error;
          else this.error = 'Invalid credentials';
          this.loading = false;
        }
      );
  }
}
