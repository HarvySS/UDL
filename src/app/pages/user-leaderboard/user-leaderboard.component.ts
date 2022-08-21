import { Component, OnInit } from '@angular/core';
import { AppUserService } from 'app/services/user/appuser.service';

@Component({
  selector: 'app-user-leaderboard',
  templateUrl: './user-leaderboard.component.html',
  styleUrls: ['./user-leaderboard.component.scss']
})
export class UserLeaderboardComponent implements OnInit {
  users:any[]
  constructor(private appUserService:AppUserService) {
    this.getUserLeaderboard();
   }

  ngOnInit(): void {
  }
  getUserLeaderboard(){
    this.appUserService.UserLeaderBoard({page:0,size:10}).subscribe(res=>{
      this.users=res.data;
    });
  }
}
