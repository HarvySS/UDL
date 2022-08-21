import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { UserService } from 'app/core/user/user.service';
import { AppUserService } from 'app/services/user/appuser.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FuseConfirmationModule } from '@fuse/services/confirmation';
import { MatDialog } from '@angular/material/dialog';
import { AuthUtils } from 'app/core/auth/auth.utils';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-teams-goal',
  templateUrl: './teams-goal.component.html',
  styleUrls: ['./teams-goal.component.scss']
})
export class TeamsGoalComponent implements OnInit {
  serverUrl = environment.serverFileUrl;
  prediction: any = { user_team1_score: undefined, user_team2_score: undefined, match_id: '', user_id: '' };
  formFieldHelpers: string[] = [''];
  userInfo: any;
  loaderCheck: boolean;
  constructor(private dialog: MatDialog,
    private _formBuilder: FormBuilder,
    private userService: AppUserService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private appUserService: AppUserService) { }
  getFormFieldHelpersAsString(): string {
    return this.formFieldHelpers.join(' ');
  }

  ngOnInit(): void {
    let token = localStorage.getItem('accessToken');
    this.userInfo = AuthUtils._decodeToken(token);
    console.log("prediction", this.data);
    this.GetUserPredictions();
  }

  GetUserPredictions() {
    this.loaderCheck = true;
    this.appUserService.GetUserPredictions(this.userInfo.sid, this.data.match_id).subscribe(res => {
      this.loaderCheck = false;
      if (res.data) {

        this.prediction.user_team1_score = res.data.user_team1_score;
        this.prediction.user_team2_score = res.data.user_team2_score;
      }

    })
  }
  savePrediction(form: NgForm) {
    if (form.valid) {
      this.loaderCheck = true;
      this.prediction.match_id = this.data.match_id;
      this.prediction.user_id = parseInt(this.userInfo.sid);
      this.userService.SetUserPredictions(this.prediction).subscribe(res => {
        if (res.isSuccess = true) {
          this.loaderCheck = false;
          Swal.fire({
            title: 'Prediction saved',
            icon: 'success',
            text: 'You prediction is saved successfuly!',
          })
          this.dialog.closeAll()
        }
        else {
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: 'There is something Error.',
          })
          this.dialog.closeAll()
        }
      })
    }

  }


  closedialoge() {
    this.dialog.closeAll()
  }

}
