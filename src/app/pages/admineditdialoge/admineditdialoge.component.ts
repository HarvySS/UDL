import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { FuseAlertType } from '@fuse/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { AppUserService } from 'app/services/user/appuser.service';
import Swal from 'sweetalert2';
@Component({
    selector: 'app-admineditdialoge',
    templateUrl: './admineditdialoge.component.html',
    styleUrls: ['./admineditdialoge.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})


export class AdmineditdialogeComponent implements OnInit {
    @ViewChild('signUpNgForm') signUpNgForm: NgForm;

 userdata:any;
//  data:any ;
 editdata: any =[];
 loaderCheck: boolean;
 adminUpdData: any=[];

    alert: { type: FuseAlertType; message: string } = {
        type: 'success',
        message: ''
    };
    signUpForm: FormGroup;
    showAlert: boolean = false;
    profileForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
    });
    constructor(
        private _authService: AuthService,
        private _formBuilder: FormBuilder,
        private _router: Router,
        private appUserService: AppUserService,
        private dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: any,

    ) {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
     ngOnInit(): void
     {
         // Create the form
         this.signUpForm = this._formBuilder.group({
                id: [this.data.id, Validators.required],
                first_name : ['', Validators.required],
                last_name  : ['', Validators.required],
             }
         );
       
         this.adminUpdData = {
             fname: this.data.first_name,
             lname:this.data.last_name,
         }
         console.log("prediction data", this.adminUpdData);
     }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    signUp(userdata): void {
        this.appUserService.UpdateUser(this.signUpForm.value).subscribe((res: any) => {
            if (res.isSuccess) {
                Swal.fire({
                    title: 'User Updated',
                    text: 'User details have been succesfuly updated.',
                    icon: 'success',
                }).then(x => {
                    this.dialog.closeAll();
                })
            }
            else{
                Swal.fire({
                    title: 'User Updated',
                    text: 'Some error occured while updating user details please try again later.',
                    icon: 'error',
                }).then(x => {
                    this.dialog.closeAll();
                })
            }

        })


    }

    closedialoge() {
        this.dialog.closeAll();
    }




}