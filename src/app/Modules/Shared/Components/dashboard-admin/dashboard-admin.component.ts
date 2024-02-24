import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { SidebarModule } from 'primeng/sidebar';
import { GoToService } from '../../services/go-to.service';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../Auth/services/auth.service';

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    RouterModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})
export class DashboardAdminComponent {

  constructor(
    public _GoToService: GoToService,
    private _AuthService: AuthService
  ) { }

  // ! <!-- !------------------------- col-------------------- -->
  // sidebarVisible: boolean = false;

  // bars() {
  //   const sidebar = document.getElementById("sidebar-bars");
  //   console.log(sidebar);
  //   sidebar?.classList.toggle("show");
  //   sidebar?.classList.toggle("transitsion");
  // }

  onLogout(): void { this._AuthService.logout(); }
}
