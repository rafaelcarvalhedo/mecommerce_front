import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiURL = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(this.getUrl(path)
      , this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getPageable<T>(path: string, params?: any): Observable<Pageable<T>> {
    return this.http.get<Pageable<T>>(this.getUrl(path), {headers : this.httpOptions.headers, params})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  post<T>(path, obj?: any): Observable<T> {
    return this.http.post<T>(this.getUrl(path), obj, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getUrl(path) {
    return this.apiURL + '/' + path;
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }


}

class Pageable<T> {
  content: Array<T>;

}
