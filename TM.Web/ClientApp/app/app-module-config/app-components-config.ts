import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'boardlist', component: BoardListComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
