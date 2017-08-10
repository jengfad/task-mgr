import { Routes, RouterModule }  from '@angular/router';

import {
    HomeComponent,
    BoardListComponent
} from '../components'

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'boardlist', component: BoardListComponent },
    { path: '**', redirectTo: 'home' }
];