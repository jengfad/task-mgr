import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { BoardService } from '../../services/board.service';
import { Board } from '../../models/board';

@Component({
    selector: 'board',
    templateUrl: './board.component.html',
    providers: <any>[ BoardService ]
})

export class BoardComponent implements OnInit {

    boards: Board[];

    public boardForm: FormGroup; // our model driven form
    public submitted: boolean; // keep track on whether form is submitted
    public events: any[] = []; // use later to display form changes

    constructor(private _fb: FormBuilder, private _boardService: BoardService) { }

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
