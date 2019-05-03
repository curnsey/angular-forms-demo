import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'https://putsreq.com/Rir6a3fFD41DEd6B8Zt9';
  subscriptionUrl: string = 'https://putsreq.com/v0spaGcTAF5UY6cYZqZ9';
  userUrl: string = 'https://api.mockaroo.com/api/b6d50970?count=250&key=38387980';
  constructor(private http: HttpClient) { }

  postUserSettings(userSettings : UserSettings) : Observable<any>{
    return this.http.post(this.url, userSettings);
  }

  getSubscriptionTypes(): Observable<any> {
    return this.http.get(this.subscriptionUrl);
  }


  getUsers(): Observable<any> {
    console.log("Getting Users...");
    return this.http.get<any>(this.userUrl).pipe(
        tap(data => {
          localStorage.setItem("users", JSON.stringify(data));
          console.log('All: ' + JSON.stringify(data));
        }), 
        catchError(this.handleError)
    );
  }
  getUser(id: number): Observable<any | undefined> {
    return this.getUsers().pipe(
      map((results: UserSettings[]) => results.filter(x=>x.id == id))
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if(err.error instanceof ErrorEvent) errorMessage = `An error occurred: ${err.error.message}`;
    else errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    console.log(errorMessage);
    return throwError(errorMessage);
} 
}
