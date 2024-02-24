import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { AdminDashHomeComponent } from '../../Admin/components/admin-dash-home/admin-dash-home.component';
import { UsersComponent } from '../../Admin/components/users/users.component';
import { BlogsComponent } from '../../Admin/components/blogs/blogs.component';
import { EditUserProfileComponent } from '../../Admin/components/edit-user-profile/edit-user-profile.component';
import { UserProfileComponent } from '../../Admin/components/user-profile/user-profile.component';
import { DashboardAdminComponent } from '../../Shared/Components/dashboard-admin/dashboard-admin.component';
import { DashboardBodyComponent } from '../../Admin/components/dashboard-body/dashboard-body.component';

@Component({
  selector: 'app-admin-dash-layout',
  standalone: true,
  imports: [
    RouterModule,
    // AdminDashHomeComponent,
    UsersComponent,
    BlogsComponent,
    UserProfileComponent,
    EditUserProfileComponent,
    DashboardAdminComponent,
    DashboardBodyComponent,
  ],
  templateUrl: './admin-dash-layout.component.html',
  styleUrl: './admin-dash-layout.component.css',
})
export class AdminDashLayoutComponent {}
