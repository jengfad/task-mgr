import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'cm-dialog-component',
  templateUrl: 'cm-dialog-component.html',
})
export class CmDialogComponent {
  constructor(public dialogRef: MdDialogRef<CmDialogComponent>) {}
}