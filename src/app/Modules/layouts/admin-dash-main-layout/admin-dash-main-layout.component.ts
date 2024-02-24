import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminDashLayoutComponent } from '../admin-dash-layout/admin-dash-layout.component';

@Component({
  selector: 'app-admin-dash-main-layout',
  standalone: true,
  imports: [
    RouterModule,
    AdminDashLayoutComponent
  ],
  templateUrl: './admin-dash-main-layout.component.html',
  styleUrl: './admin-dash-main-layout.component.css'
})
export class AdminDashMainLayoutComponent {

}
