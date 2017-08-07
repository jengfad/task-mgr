import { Observable } from 'rxjs/Rx';
import { CmDialogComponent } from '../components/common/cm-dialog-component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MdDialogRef<CmDialogComponent>;

        dialogRef = this.dialog.open(CmDialogComponent);
        // dialogRef.componentInstance.title = title;
        // dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}