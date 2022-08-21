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
import { ContactUsComponent } from 'app/pages/contact-us/contact-us.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

const ContactUsRoutes: Route[] = [
    {
        path     : '',
        component: ContactUsComponent
    }
];

@NgModule({
    declarations: [
        ContactUsComponent,
    ],
    imports     : [
        RouterModule.forChild(ContactUsRoutes),
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
    ]
})
export class ContactUsModule
{
}
