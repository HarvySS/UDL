import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FuseCardModule } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FuseAlertModule } from '@fuse/components/alert';
import { AdminPanelComponent } from 'app/pages/admin-panel/admin-panel.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AdmineditdialogeComponent } from './admineditdialoge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
    declarations: [
        AdmineditdialogeComponent,
    ],
    imports     : [
        // RouterModule.forChild(AdminPanelRoutes),
        FormsModule,
        FuseCardModule,
        CommonModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        FuseAlertModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        ReactiveFormsModule ,
        
        MatProgressSpinnerModule
    ]
})
export class AdmineitModule
{
}
