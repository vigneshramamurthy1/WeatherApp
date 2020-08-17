import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';


@Injectable()
export class WeatherService {
	constructor(protected http: HttpClient) { }
    getCities(): any {
		return this.http.get('/assets/cities.json');
	}
}