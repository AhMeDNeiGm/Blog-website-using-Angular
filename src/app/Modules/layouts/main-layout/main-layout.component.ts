import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from '../../Auth/components/login-page/login-page.component';
import { FooterComponent } from '../../Shared/Components/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterModule,
    LoginPageComponent,
    FooterComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
