import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PeopleListComponent} from './people-list/people-list.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PeopleListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
