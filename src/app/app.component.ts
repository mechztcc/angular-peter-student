import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomBarComponent } from './core/components/bottom-bar/bottom-bar.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NotificationsDeliveryComponent } from './core/components/notifications-delivery/notifications-delivery.component';
import { WindowService } from './core/services/window/window.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    BottomBarComponent,
    NotificationsDeliveryComponent,
  ],
  providers: [WindowService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {}

  @HostListener('window:load', ['$event'])
  onLoad(event: any) {}

  get isAuth() {
    const window = this.windowService.getWindow();

    return (
      window.location.href.includes('home') ||
      window.location.href.includes('teams')
    );
  }

  constructor(public windowService: WindowService) {}

  ngOnInit(): void {}

  title = 'peter-student';
}
