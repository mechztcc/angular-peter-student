import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BottomBarComponent } from './core/components/bottom-bar/bottom-bar.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHandlerInterceptor } from './core/interceptors/http-request.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, BottomBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: HttpHandlerInterceptor,
      multi: true,
    },
  ],
})
export class AppComponent {
  title = 'peter-student';
}
