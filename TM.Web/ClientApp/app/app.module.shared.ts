import { NgModule } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appComponentsConfig } from './app-module-config/app-components-config';

//services
import { BoardService } from './services/board.service';
import { DialogsService } from './services/dialogs.service';

export const sharedConfig: NgModule = {
    bootstrap: [ 
        ...appComponentsConfig.bootstrap 
    ],
    declarations: [
        ...appComponentsConfig.declarations
    ],
    entryComponents: [
        ...appComponentsConfig.entryComponents
    ],
    imports: [
        
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        ...appComponentsConfig.imports
    ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, BoardService, DialogsService]
};
