import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MdButtonModule, MdToolbarModule, MdGridListModule } from '@angular/material';

//components
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { BoardListComponent } from './components/boardlist/boardlist.component';

//services
import { BoardService } from './services/board.service';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        BoardListComponent
    ],
    imports: [
        MdButtonModule,
        MdToolbarModule,
        MdGridListModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'boardlist', component: BoardListComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, BoardService]
};
