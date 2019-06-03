import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { BASEURL } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class CustomHttpService {

  constructor(private httpClient: HttpClient) { }

  // private getAccessToken() {

  //     const basicToken = "wrlife:nxtlife";

  //     return !localStorage.getItem('access_token') ? 'Basic ' + btoa(basicToken) : 'Bearer ' + localStorage.getItem('access_token');
  // }

  // private addHeaders(optionalHeaders?: HttpHeaders) {

  //     let requestHeaders = new HttpHeaders()
  //         .set('Authorization', this.getAccessToken())
  //     if (optionalHeaders) {
  //         for (const header of optionalHeaders.keys()) {
  //             requestHeaders = requestHeaders.append(header, optionalHeaders.get(header));
  //         }
  //     }
  //     return requestHeaders;
  // }



  get(url: string, options?: HttpHeaders) {
    // const headers = this.addHeaders(options);

    return this.httpClient.get(BASEURL + url, { observe: 'response'/**, headers: headers*/ })
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  post(url: string, body: any, options?: HttpHeaders) {
    // const headers = this.addHeaders(options);

    return this.httpClient.post(BASEURL + url, body, { observe: 'response'/**, headers: headers*/ })
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  put(url: string, body: any, options?: HttpHeaders) {
    // const headers = this.addHeaders(options);

    return this.httpClient.put(BASEURL + url, body, { observe: 'response'/**, headers: headers*/ })
      .pipe(map(this.extractData), catchError(this.handleError));

  }



  private extractData(res: HttpResponse<any>) {

    // console.log('inside extract data', res);
    return res.body || res;
  }

  private handleError(err: HttpErrorResponse) {
    // console.log('inside handle error', err);
    const errorInfo: any = {};

    if (err.error instanceof Error || err.error instanceof ProgressEvent) {
      // tslint:disable-next-line:jsdoc-format
      /**A client-side or network error occurred. Handle it accordingly.*/
      // console.log('An error occurred:', );
      errorInfo.status = err.status;
      errorInfo.status == 0 ? errorInfo.msg = "Some error occured, couldn\'t conect to server" : errorInfo.msg = err.message || 'Some Error Occured';
    }
    else {
      // tslint:disable-next-line:jsdoc-format
      /**The backend returned an unsuccessful response code.*/
      // console.log('Server occurred:', err);
      errorInfo.status = err.status;
      errorInfo.msg = err.error.message || err.error.error || 'Internal Server Error';
    }
    return Observable.throw(errorInfo);

  }


}
