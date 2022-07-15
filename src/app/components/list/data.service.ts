import { Injectable } from '@angular/core';
import  {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { CityI } from '../models/city/city.interface';

@Injectable({providedIn: 'root'}) 
export class DataService {
private urlApi = 'api/cities';
  constructor(http: HttpClient) { }
//creacion de metodos
getAllCities(): Observable<CityI[]> {
  return this.http.get<CityI[]>(this.urlApi);
}
}