import { NgModule } from '@angular/core';
import  {   
            MdButtonModule, 
            MdToolbarModule, 
            MdGridListModule,
            MdDialogModule,
            MdInputModule,
            MdSidenavModule,
            MdIconModule,
            MdListModule,
            MdChipsModule,
            MdCardModule
        } from '@angular/material';

export const ngMaterialConfig: NgModule = {
    
    imports: [
        MdButtonModule,
        MdToolbarModule,
        MdGridListModule,
        MdDialogModule,
        MdInputModule,
        MdSidenavModule,
        MdIconModule,
        MdListModule,
        MdChipsModule,
        MdCardModule
    ]
};
