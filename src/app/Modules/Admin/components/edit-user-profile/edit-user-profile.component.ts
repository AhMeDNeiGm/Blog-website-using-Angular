import { User } from './../../../Shared/interfaces/user';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-edit-user-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-user-profile.component.html',
  styleUrl: './edit-user-profile.component.css',
})
export class EditUserProfileComponent {
  constructor(
    private _UserService: UserService,
    private _myActivatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    this.initializeForm();
  }

  // * Variables
  private _user!: User;
  private _userId!: number;
  imagePrefix: String = '';
  userForm!: FormGroup;

  ngOnInit(): void {
    console.log('init');
    this._userId = this._myActivatedRoute.snapshot.params['id'];

    this._UserService.getUserById(this._userId).subscribe((user) => {
      // * You can initialize the user object if you have existing data
      this._user = user;
      // Initialize form with user data
      this.initializeForm();

      console.log(this._user);
    });
  }

  FormControlsNames = {
    //#region
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    newPassword: 'newpassword',
    occupation: 'occupation',
    location: 'location',
    bio: 'bio',
    username: 'username',
    phone: 'phone',
    age: 'age',
    //#endregion
  } as const;

  initializeForm() {
    // Initialize form with user data
    this.userForm = this._formBuilder.group({
      [this.FormControlsNames.firstName]: [
        'this._user?.firstName - UUPDATE API',
        Validators.required,
        // Validators.minLength(3),
      ],
      [this.FormControlsNames.lastName]: [
        'this._user?.lastName - UUPDATE API',
        Validators.required,
        // Validators.minLength(3),
      ],
      [this.FormControlsNames.occupation]: [
        this._user?.occupation,
        Validators.required,
      ],
      [this.FormControlsNames.location]: [
        this._user?.location,
        Validators.required,
      ],
      [this.FormControlsNames.bio]: [this._user?.bio, Validators.required],
      [this.FormControlsNames.password]: [
        this._user?.password,
        Validators.required,
      ],
      [this.FormControlsNames.username]: [
        this._user?.username,
        Validators.required,
      ],
      [this.FormControlsNames.email]: [
        this._user?.email,
        [Validators.required, Validators.email],
      ],
      [this.FormControlsNames.phone]: [this._user?.phone, Validators.required],
      [this.FormControlsNames.age]: [this._user?.age, Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Retrieve form values
      const formData = this.userForm.value;
      // You can perform any additional processing here
      console.log(formData);
    } else {
      // Handle form validation errors
    }
  }
}
