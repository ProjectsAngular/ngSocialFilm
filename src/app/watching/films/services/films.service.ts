import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Film} from "../model/film";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  basePath = "https://localhost:7286/api/v1/films"

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default Error Handling
      console.log(`An error occurred ${error.status}, body was: ${error.error}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Return Observable with Error Message to Client
    return throwError(() => new Error('Something happened with request, please try again later.'));
  }

  // Get all films
  getAll(): Observable<Film> {
    return this.http.get<Film>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // Get film by id
  getById(id: any): Observable<Film> {
    return this.http.get<Film>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
