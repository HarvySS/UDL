import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private http: HttpClient) { }
  SetUserPredictions(req):any{
    return	this.http.post(`${environment.url}User/SetUserPredictions`,req)
  }
  UserLeaderBoard(req):any{
    return	this.http.post(`${environment.url}User/UserLeaderBoard`,req)
  }
  GetUserPredictions(user_id,match_id):any{
    return	this.http.get(`${environment.url}User/GetUserPredictions/${user_id}/${match_id}`)
  }
  GetUsers(req:{pgNumber:number,pgSize:number}){
    return this.http.get(`${environment.url}AdminPanel/pagination/${req.pgNumber}/${req.pgSize}`)
  }
  DeleteUser(id:any): any{
    return this.http.delete(`${environment.url}AdminPanel/deleteuser/${id}`)
  }
UpdateUser(data):any{
  return this.http.post(`${environment.url}AdminPanel/updateuser`,data)
}

}
