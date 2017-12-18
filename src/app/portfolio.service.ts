import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { Portfolio } from './portfolio'


@Injectable()
export class PortfolioService {

  private portfolioUrl = 'http://86.64.78.32:30000/api/portfolio';  // URL to web api

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

  getPortfolio(userID: number) {
    const url = `${this.portfolioUrl}/get/${userID}/`;
    return this.http.get(url, this.jwt()).map((response: Response) => response.json());
  }

  updatePortfolio(portfolio: Portfolio) {
    const url = `${this.portfolioUrl}/update/${portfolio.id}/`;
    const body = {"name": portfolio.name};
    return this.http.put(url, body, this.jwt()).map((response: Response) => response.json());
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
    this.messageService.add('PortfolioService: ' + message);
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