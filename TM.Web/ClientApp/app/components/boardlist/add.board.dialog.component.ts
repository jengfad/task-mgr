import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'add.board.dialog.component',
  templateUrl: 'add.board.dialog.component.html',
})
export class AddBoardDialogComponent {

  public boardForm: FormGroup; // our model driven form

  constructor(private _fb: FormBuilder, public dialogRef: MdDialogRef<AddBoardDialogComponent>) {}

  ngOnInit(): void {

        // the short way
        this.boardForm = this._fb.group({
                Title: ['']
            });
        }

  onCloseConfirm(frm: FormGroup) {
    this.dialogRef.close(frm);
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }
}