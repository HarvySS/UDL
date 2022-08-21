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
import { LeagueScoreboardComponent } from 'app/pages/league-scoreboard/league-scoreboard.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
const LeagueScoreboardRoutes: Route[] = [
    {
        path     : '',
        component: LeagueScoreboardComponent
    }
];

@NgModule({
    declarations: [
        LeagueScoreboardComponent,
    ],
    imports     : [
        RouterModule.forChild(LeagueScoreboardRoutes),
        FuseCardModule,
        CommonModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FuseAlertModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatProgressSpinnerModule
    ]
})
export class LeagueScoreboardModule
{
}
