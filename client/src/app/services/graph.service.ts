import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Graph} from '../models/graph.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private getUrl = environment.api + '/graphs/';
  private headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Graph[]>(this.getUrl, {headers: this.headers, withCredentials: true});
  }
}
