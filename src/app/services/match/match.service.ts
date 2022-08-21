import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }
  GetAllMatches(req):any{
    return	this.http.post(`${environment.url}Match/GetAllMatches`,req)
  }
}
