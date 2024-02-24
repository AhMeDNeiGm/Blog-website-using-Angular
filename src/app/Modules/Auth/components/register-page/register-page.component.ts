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
  selector: 'app-register-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    MessagesModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  registerForm!: FormGroup;
  formControlsNames;
  msgError?: string;
  isLoading: boolean;
  isExistedUser: boolean;
  registerSubscribe!: Subscription;

  constructor(
    private _FormBuilder: FormBuilder,
    private _AuthService: AuthService,
    private _Router: Router,
    private _messageService: MessageService,
    public _GoToService: GoToService
  ) {
    this.formControlsNames = this._AuthService.formControlsNames;
    this.isLoading = false;
    this.isExistedUser = false;
  }

  ngOnInit(): void {
    this.registerForm = this._FormBuilder.group({
      //#region 
      [this.formControlsNames.firstname]: ['', [Validators.required, Validators.minLength(3)]],
      [this.formControlsNames.lastname]: ['', [Validators.required, Validators.minLength(3)]],
      [this.formControlsNames.email]: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),],],
      [this.formControlsNames.password]: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'),],],
      //#endregion
    });
  }

  ngOnDestroy(): void {
    this.registerSubscribe?.unsubscribe();
  }

  onRegister() {
    if (this.registerForm.valid) {
      //#region valid

      
      this.isLoading = true;
      this.registerSubscribe = this._AuthService.setRegister(this.registerForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.isLoading = false;
            res.message == 'success' ? this._Router.navigate([this._GoToService.page.login]) : null;
          },
          error: (err: HttpErrorResponse) => {
            console.log(err);
            this.isLoading = false;
            this.isExistedUser = true;
            this.msgError = err.error.message;
            this._messageService.add({ severity: 'error ', summary: 'Error', detail: this.msgError });
          },
        })
      //#endregion
    }
  }
}
