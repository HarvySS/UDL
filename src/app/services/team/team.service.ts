import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }
  GetAllTeams(req):any{
    return	this.http.post(`${environment.url}Team/GetAllTeams`,req)
  }
}
