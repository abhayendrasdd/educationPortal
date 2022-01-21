import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private apiUrl = environment.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  getAllCourseCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/get-all-course-categories`)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  // getCategoryCourse(data: any): Observable<any> {
  //   return this.http.get(`${this.apiUrl}api/get-category-courses`)
  //     .pipe(
  //       catchError(this.handleError('Error', []))
  //     );
  // }

  getCategoryCourse(data: any): Observable<any> {
    return this.http.get(`${this.apiUrl}api/get-category-courses?category_id=${data.category_id}&language_id=${data.language_id}&duration=${data.duration}&level=5&subject=${data.subject}`)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  getCourseDetails(course_id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}api/get-course-details/{course_id}?course_id=${course_id}`)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  getCourseReviews(course_id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}api/get-course-reviews/{course_id}?course_id=${course_id}`)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  getFAQs(data: any): Observable<any> {
    return this.http.get(`${this.apiUrl}api/get-faqs/{course_id}?course_id=${data.course_id}`)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  getSettingValues(data: any): Observable<any> {
    return this.http.get(`${this.apiUrl}api/get-settings?s_key=${data.s_key}`)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  getSetting(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/get-settings`)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }
  
  addContacts(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/contact_us`, data)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  subscribeUserEmail(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/subscribe_email`, data)
      .pipe(
        catchError(this.handleError('Error', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error("Error handler", error);
      return of(result as T);
    };
  }

}
