import { Component, Input, OnInit } from '@angular/core';
import { MatchService } from 'app/services/match/match.service';
import { environment } from 'environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { TeamsGoalComponent } from '../teams-goal/teams-goal.component';
import { AuthService } from 'app/core/auth/auth.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router'
import { TeamService } from 'app/services/team/team.service';





@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  matches: any[];
  teams: any[];
  matchList: any[];
  serverUrl = environment.serverFileUrl;
  selectedProject: string = '2022-21';
  constructor(private matchService: MatchService, public matDialog: MatDialog, private authService: AuthService, private _router:Router,private teamService:TeamService) { }

  ngOnInit(): void {
    this.getAllMatches();

  }



  getAllMatches() {
    this.matchService.GetAllMatches({ page: 0, size: 10 }).subscribe(res => {
      if (res.isSuccess) {

        this.matches = res.data;
        // console.log('matches => ',this.matches);
        const groups = this.matches.reduce((groups, game) => {
          const date = game.match_date.split('T')[0];
          if (!groups[date]) {
            groups[date] = [];
          }
          groups[date].push(game);
          return groups;
        }, {});
        console.log('group by object', groups)

        const groupArrays = Object.keys(groups).map((date) => {
          return {
            date,
            games: groups[date]
          };
        });
        this.matchList = groupArrays;
        this.matchList.sort(function (a, b) {
          var c: any = new Date(a.date);
          var d: any = new Date(b.date);
          return c - d;
        });
        console.log('group by object', this.matchList);

      }
    })

  }
  onOpenDialogClick(match) {
    if (this.authService.accessToken) {
      if (!match.won_id && !match.is_draw) {
        if (this.authService.accessToken) {
          this.matDialog.open(TeamsGoalComponent, {
            width: '400px',
            height: 'auto',
            data: match
          });
        }
      }
      else {
        Swal.fire({
          title: 'Match already played',
          icon: 'info',
          text: 'You can not add predictions on this match!',
        })
      }
    }



  }
  redirectToTeams(teamName){
    this._router.navigateByUrl(`/teams?team=${teamName}`);
  }

}
