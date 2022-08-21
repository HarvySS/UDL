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
import { UserLeaderboardComponent } from 'app/pages/user-leaderboard/user-leaderboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const UserLeaderboardRoutes: Route[] = [
    {
        path     : '',
        component: UserLeaderboardComponent
    }
];

@NgModule({
    declarations: [
        UserLeaderboardComponent,
    ],
    imports     : [
        RouterModule.forChild(UserLeaderboardRoutes),
        FuseCardModule,
        CommonModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatDividerModule,
        MatIconModule,
        FuseAlertModule,
        MatInputModule,
        MatMenuModule,
        MatProgressSpinnerModule,
    ]
})
export class UserLeaderboardModule
{
}
