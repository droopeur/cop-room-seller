import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['',Validators.required]
    });
  }

  tryLogin(value){
    console.log('loginIn')
    this.authService.doLogin(value)
      .then(res => {
        this.router.navigate(['/admin']);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }
  ngOnInit() {
  }


}
