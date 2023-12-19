import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./modules/home/pages/home-page/home-page.component').then(
        (c) => c.HomePageComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/auth/pages/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },

  {
    path: 'create-account',
    loadComponent: () =>
      import(
        './modules/auth/pages/create-account/create-account.component'
      ).then((c) => c.CreateAccountComponent),
  },

  {
    path: 'teams',
    loadComponent: () =>
      import('./modules/teams/pages/ranking-page/ranking-page.component').then(
        (c) => c.RankingPageComponent
      ),
  },

  {
    path: 'lesson/:id',
    loadComponent: () =>
      import(
        './modules/lessons/pages/question-page/question-page.component'
      ).then((c) => c.QuestionPageComponent),
  },

  {
    path: 'lesson/already-done/:id',
    loadComponent: () =>
      import(
        './modules/lessons/pages/lesson-already-done/lesson-already-done.component'
      ).then((c) => c.LessonAlreadyDoneComponent),
  },
];
