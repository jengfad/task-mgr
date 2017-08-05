import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Board } from '../models/board';
import { Global } from '../shared/global';

@Injectable()
export class BoardService {
    constructor(private _http:Http) {
    }

    getBoards():Observable<Board[]> {
        return this._http.get(Global.API_DOMAIN + Global.BASE_BOARD_ENDPOINT)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    createBoard(model: Board):Observable<Board[]> {
        let body = JSON.stringify(model);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(Global.API_DOMAIN + Global.BASE_BOARD_ENDPOINT, body, options)
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}