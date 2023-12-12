import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faBurger,
  faChartSimple,
  faHome,
  faRightFromBracket,
  faScroll,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { WindowService } from '../../services/window/window.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-bottom-bar',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, NgClass],
  providers: [WindowService],
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.scss',
})
export class BottomBarComponent implements OnInit {

  constructor(public windowService: WindowService) {}
  ngOnInit(): void {}

  get isAuth() {
    const window = this.windowService.getWindow();
    return (
      window.location.href.includes('login') ||
      window.location.href.includes('create')
    );
  }

  get router() {
    return window.location.href;
  }

  icons = {
    home: faHome,
    lessons: faScroll,
    teams: faUsers,
    rank: faChartSimple,
    exit: faRightFromBracket,
    menu: faBars,
  };
}
