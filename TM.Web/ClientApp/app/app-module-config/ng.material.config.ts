import { NgModule } from '@angular/core';
import  {   
            MdButtonModule, 
            MdToolbarModule, 
            MdGridListModule,
            MdDialogModule,
            MdInputModule,
            MdSidenavModule
        } from '@angular/material';

export const ngMaterialConfig: NgModule = {
    
    imports: [
        MdButtonModule,
        MdToolbarModule,
        MdGridListModule,
        MdDialogModule,
        MdInputModule,
        MdSidenavModule
    ]
};
