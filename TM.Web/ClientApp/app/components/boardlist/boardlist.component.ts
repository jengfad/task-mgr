import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { BoardService } from '../../services/board.service';
import { Board } from '../../models/board';

import { DialogsService } from '../../services/dialogs.service';

import { AddBoardDialogComponent } from './add.board.dialog.component';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

@Component({
    selector: 'board',
    templateUrl: './boardlist.component.html',
    providers: <any>[ BoardService, DialogsService ]
})

export class BoardListComponent implements OnInit {

    boards: Board[];

    tiles = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

    public boardForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes
    public result: any;
    selectedOption: string;

    constructor(
        public dialogsService: DialogsService, 
        private _fb: FormBuilder, 
        private _boardService: BoardService,
        public dialog: MdDialog
    ) { }

    openDialog() {
        // this.dialogsService
        //     .confirm('Confirm Dialog', 'Are you sure you want to do this?')
        //     .subscribe(res => this.result = res);

        let config = new MdDialogConfig;

        config.data = "Test";
        let dialogRef = this.dialog.open(AddBoardDialogComponent, config);
        dialogRef.afterClosed().subscribe(result => {
            alert(result.Title);
        });

    }

    ngOnInit(): void {
        this.LoadBoards();

        // the short way
        this.boardForm = this._fb.group({
                Title: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
            });
        }

    LoadBoards(): void {
        this._boardService.getBoards()
            .subscribe(boards => { 
                this.boards = boards;
                this.boards.push({Id:0, Title: "Add New Board"})
            });

    }

    AddBoard(model: Board, isValid: boolean) {
        this.submitted = true; // set form submit to true

        this._boardService.createBoard(model)
            .subscribe(result => { 
                this.LoadBoards();
            },
            error => {
                alert('Error on creating board')
            });
    }
}

