import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Schenanigans } from './schenanigans/schenanigans';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'schenanigans',
    component: Schenanigans,
  },
  {
    path: 'projects',
    component: Projects,
  },
  {
    path: 'contact',
    component: Contact,
  },
];
