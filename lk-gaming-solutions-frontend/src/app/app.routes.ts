import { Routes } from '@angular/router';
import { Home } from './pages/enduser/home/home';
import { Pc } from './pages/enduser/pc/pc';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home,
    title: 'Home | LK Gaming Solutions',
  },
  {
    path: 'category/pc',
    component: Pc,
    title: 'PC | LK Gaming Solutions',
  }
];
