import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private readonly apiUrl = 'https://api.nasa.gov/planetary/apod';
  private readonly apiKey = 'p3jJtEscGdcnD4iQZpgbCbP0C2IbZflnkp6VAuSx'; 

  constructor(private http: HttpClient) { }

  getPictureOfTheDay(): Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get(this.apiUrl, { params });
  }
}
