import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userBlock: any;

  private apiUrl = environment.API_ENDPOINT ;

  constructor(private http: HttpClient) { }


  signUp(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/auth/signup`, data)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  
  authLogin(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}sagson/public/api/auth/login`, data)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/auth/user_login`, data)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  
  otpVerification(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/auth/otp_verification`, data)
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
