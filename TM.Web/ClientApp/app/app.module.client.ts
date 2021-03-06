import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';
import { sharedConfig } from './app.module.shared';
import { ngMaterialConfig } from './app-module-config/ng.material.config';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    entryComponents: sharedConfig.entryComponents,
    imports: [
        BrowserModule,
        HttpModule,
        FlexLayoutModule,
        ...sharedConfig.imports,
        ...ngMaterialConfig.imports
    ],
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin }
    ]
})
export class AppModule {
}
