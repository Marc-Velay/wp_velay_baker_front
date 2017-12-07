import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { GraphDataPoint } from './graphDataPoint';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

@Injectable()
export class GraphDataService {

  private graphDataUrl = 'http://86.64.78.32:30000/api/Forex/2017/';  // URL to web api

  constructor(
    //private http: HttpClient,
    private http: Http,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  /*getGraphData (): Observable<GraphDataPoint[]> {

    return this.http.get<GraphDataPoint[]>(this.graphDataUrl)
      .pipe(
        tap(graphData => this.log(`fetched data`)),
        catchError(this.handleError('getGraphData', []))
      );
  }*/

  getGraphData() {
    return this.http.get(this.graphDataUrl, this.jwt()).map((response: Response) => response.json());
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('GraphDataService: ' + message);
  }

  private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            //let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            let headers = new Headers({ 'Authorization': 'Basic dXNlcjpwaWNrbGVyaWNr' });
            return new RequestOptions({ headers: headers });
        }
    }
}
