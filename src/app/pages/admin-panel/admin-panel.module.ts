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
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const AdminPanelRoutes: Route[] = [
    {
        path     : '',
        component: AdminPanelComponent
    }
];

@NgModule({
    declarations: [
        AdminPanelComponent,
    ],
    imports     : [
        RouterModule.forChild(AdminPanelRoutes),
        FuseCardModule,
        CommonModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        FuseAlertModule,
        MatMenuModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        
        //MatTableDataSource
    ]
})
export class AdminPanelModule
{
}
