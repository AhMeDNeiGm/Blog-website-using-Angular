import { Component } from '@angular/core';
import { LoginPageComponent } from '../../Auth/components/login-page/login-page.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../Shared/Components/footer/footer.component';
import { DashboardAdminComponent } from '../../Shared/Components/dashboard-admin/dashboard-admin.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    RouterModule,
    LoginPageComponent,
    FooterComponent,
    DashboardAdminComponent
  ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
