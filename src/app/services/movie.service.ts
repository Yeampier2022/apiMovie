import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private HttpCliente : HttpClient) { }
  API_URL="http://www.omdbapi.com/?apikey=45f01ce9"



  getMovies(serachTerm: string): Observable<any> {
    return this.HttpCliente.get(`${this.API_URL}&s=${serachTerm}`)
  }
}
