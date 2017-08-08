import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../components/app/app.component'
import { NavMenuComponent } from '../components/navmenu/navmenu.component';
import { HomeComponent } from '../components/home/home.component';
import { FetchDataComponent } from '../components/fetchdata/fetchdata.component';
import { CounterComponent } from '../components/counter/counter.component';
import { BoardListComponent } from '../components/boardlist/boardlist.component';
import { CmDialogComponent } from '../components/common/cm-dialog-component';
import { AddBoardDialogComponent } from '../components/boardlist/add.board.dialog.component';

export const appComponentsConfig : NgModule = {
    bootstrap: [ AppComponent ],
    entryComponents: [
        CmDialogComponent,
        AddBoardDialogComponent
    ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        BoardListComponent,
        CmDialogComponent,
        AddBoardDialogComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'boardlist', component: BoardListComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
};
