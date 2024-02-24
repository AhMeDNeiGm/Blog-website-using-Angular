import { RouterModule } from '@angular/router';
// import { AdminDashHomeComponent } from './../../../Admin/components/admin-dash-home/admin-dash-home.component';
import { Component } from '@angular/core';
import { GoToService } from '../../services/go-to.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterModule,
    // AdminDashHomeComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {
  constructor(public _GoToService: GoToService) {}
}
