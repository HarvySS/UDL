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
import { TeamsComponent } from 'app/pages/teams/teams.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { NgImageSliderModule } from 'ng-image-slider';

const TeamsRoutes: Route[] = [
    {
        path     : '',
        component: TeamsComponent
    }
];

@NgModule({
    declarations: [
        TeamsComponent,
    ],
    imports     : [
        RouterModule.forChild(TeamsRoutes),
        FuseCardModule,
        CommonModule,
        MatButtonModule,
        NgImageSliderModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        FuseAlertModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
    ]
})
export class TeamsModule
{
}
