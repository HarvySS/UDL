import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'app/services/team/team.service';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-league-scoreboard',
  templateUrl: './league-scoreboard.component.html',
  styleUrls: ['./league-scoreboard.component.scss']
})
export class LeagueScoreboardComponent implements OnInit {
  serverUrl=environment.serverFileUrl;
  isLoading:boolean=true;
  teams: any[];
  selectedSeason: string = '';
  seasons:any[];
  constructor( private teamService:TeamService,private _router: Router) { }

  ngOnInit(): void {
    this.getAllTeams();
  }
  redirectToTeams(teamName){
    this._router.navigateByUrl(`/teams?team=${teamName}`);
  }
  seasonChanged(){
    this.isLoading =true;
    this.teamService.GetAllTeams({page:0,size:10,Search:this.selectedSeason}).subscribe(res=>{
      if(res.isSuccess){
          this.teams=res.data.teams;
          this.seasons=res.data.seasons;
          this.selectedSeason=res.data.selectedSeason;
          this.isLoading =false;
      }
  });
  }
  getAllTeams(){
    this.teamService.GetAllTeams({page:0,size:10}).subscribe(res=>{
        if(res.isSuccess){
            this.teams=res.data.teams;
            this.seasons=res.data.seasons;
            this.selectedSeason=res.data.selectedSeason;
            this.isLoading =false;
        }
    })
  }

}
