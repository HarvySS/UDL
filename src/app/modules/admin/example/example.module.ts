import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { FuseCardModule } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FuseAlertModule } from '@fuse/components/alert';
import { MatchComponent } from 'app/pages/match/match.component';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AdmineditdialogeComponent } from 'app/pages/admineditdialoge/admineditdialoge.component';
import { AdminPanelModule } from 'app/pages/admin-panel/admin-panel.module';


const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
        MatchComponent,
        // AdmineditdialogeComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        FuseCardModule,
        CommonModule,
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        FuseAlertModule,
        MatMenuModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        // AdminPanelModule
    ]
})
export class ExampleModule
{
}
