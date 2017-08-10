import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes }   from './app.route';

import {
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BoardListComponent,
    AddBoardDialogComponent,
    CmDialogComponent 
} from '../components'


export const appComponentsConfig : NgModule = {
    bootstrap: [ AppComponent ],
    entryComponents: [
        CmDialogComponent,
        AddBoardDialogComponent
    ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        BoardListComponent,
        CmDialogComponent,
        AddBoardDialogComponent
    ],
    imports: [
        RouterModule.forRoot(routes)
    ]
};
