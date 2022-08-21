import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { AppUserService } from 'app/services/user/appuser.service';
import Swal from 'sweetalert2';
import {MatDialog} from '@angular/material/dialog';
import { AdmineditdialogeComponent } from '../admineditdialoge/admineditdialoge.component';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  totalCount:number;
  isLoading:boolean=true;
  pgSize:number=10;
  pgNumber=0;
  users:any = [];
  @Input() appearance: 'basic' | 'bar' = 'basic';
  @ViewChild('paginator') paginator: MatPaginator;
  constructor(private appUserService:AppUserService, private authService: AuthService, private dialog:MatDialog) 
  {
    this.getUsers();
   }

  ngOnInit(): void {
  }

  getUsers(){
    this.isLoading= true
    this.appUserService.GetUsers({pgNumber:this.pgNumber,pgSize:this.pgSize}).subscribe((res: any) =>{
      this.isLoading=false;
      this.users=res.data;
      this.totalCount=res.totalCount;
      console.log(this.users)
      this.paginator.length=res.totalCount;
    });
  }
  getServerData(event){
    this.pgNumber = event.pageIndex;
    this.pgSize=event.pageSize;
    this.getUsers();
  }
  deleteuser(data: any){
    if(this.authService.accessToken){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         
          this.appUserService.DeleteUser(data).subscribe((res:any) =>{
            this.getUsers();
            Swal.fire(
              'Deleted!',
              'User has been deleted successfuly.',
              'success',
            );
          })
        }
      })
    }
    else{
      Swal.fire({
        title:'There Is Something Error!',
        text:'Check Your Internet Connection Or Login Again To Delete This User.',
        icon:'warning',
      })
    }
  }


  editdialoge(data:any){
    let ref=this.dialog.open(AdmineditdialogeComponent,{
      width: '400px',
      height: 'auto',
      data: data,
    });
    ref.afterClosed().subscribe(data=>{
      this.getUsers();
    })
  }
}

