import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userBlock: any;

  private apiUrl = environment.API_ENDPOINT + 'api';

  constructor(private http: HttpClient) { }


  signUp(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/signup`, data)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("Error handler" ,error);
      return of(result as T);
    };
  }

}
