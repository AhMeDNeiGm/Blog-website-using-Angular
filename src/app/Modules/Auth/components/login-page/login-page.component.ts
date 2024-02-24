import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { GoToService } from '../../../Shared/services/go-to.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MessagesModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  formControlsNames;
  msgError?: string;
  isLoading: boolean;
  loginSubscribe!: Subscription;

  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthService: AuthService,
    private _Router: Router,
    private _messageService: MessageService,
    public _GoToService: GoToService
  ) {
    this.formControlsNames = this._AuthService.formControlsNames;
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.loginForm = this._FormBuilder.group({
      //#region 
      [this.formControlsNames.email]: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')]],
      [this.formControlsNames.password]: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}')]]
      //#endregion
    });
  }

  ngOnDestroy(): void {
    this.loginSubscribe?.unsubscribe();
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.valid);
      console.log(this.loginForm.value );
      
      //#region valid
      this.isLoading = true;
      this.loginSubscribe = this._AuthService.setLogin(this.loginForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.isLoading = false;

            if (res) {
              console.log(res);
              
              this._AuthService.setToken(res.token);
              console.log(this._AuthService.getToken());
              this._Router.navigate([this._GoToService.page.DashAdminHome]);

            }
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
            this.isLoading = false;
            this.msgError = err.error.message;
            this._messageService.add({ severity: 'error ', summary: 'Error', detail: this.msgError });
          },
        })
      //#endregion
    }
    else
    {
      this._messageService.add({ severity: 'error ', summary: 'Error', detail:"You need to enter your Data For login " });
    }
  }
}
