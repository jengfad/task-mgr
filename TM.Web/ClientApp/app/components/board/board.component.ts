import { Component, OnInit } from '@angular/core';
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
    
    constructor(private _boardService: BoardService) { }

    ngOnInit(): void {
        console.log('This is on init');
        this.LoadBoards();
    }

    LoadBoards(): void {
        this._boardService.getData()
            .subscribe(boards => { 
                console.log(boards); 
            });

    }
}
