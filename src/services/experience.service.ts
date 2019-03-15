import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


export interface ExperienceDataInterface {
    name: string;
    logo: string;
    profileSummary: string;
    address: string;
    phone: string;
    email: string;
    imagePath: string;
    menu: string;
    shortName: string;
        menuIcon: string;
        targetid: string;
    education: string;
    school: string;
    location: string;
    social: string;
        media: string;
        cursor: string;
        icon: string;
        linkUrl: string;
    technologies: string;
    tech: string;
    id: number;
    imageUrl: string;
    title: string;
    subTitle: string;
    description: string;
    paragraph: string;
    // length: any;
}

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  private _url = '../../assets/data/experience-data.json';

  constructor(private _httpClient: HttpClient) { }

  public experienceData (): Observable<ExperienceDataInterface[]> {
    // console.log('this._url: ', this._url);
    return this._httpClient
    .get<ExperienceDataInterface[]>(this._url)
    .pipe(
      catchError(this.fHandleError)
    );
  }

  public fHandleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
