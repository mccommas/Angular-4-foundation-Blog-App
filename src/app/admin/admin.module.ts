/**
 * Created by jmccommas on 6/26/17.
 */
import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AdminComponent } from '../admin/admin.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { UserService } from './admin-shared/user.service';
import { AdminSharedComponent } from './admin-shared/admin-shared.component';

const AdminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignUpComponent },
            { path: '', component: AdminMenuComponent, canActivate: [UserService] }
        ]
    },
];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(AdminRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AdminComponent,
        AdminMenuComponent,
        AdminComponent,

        LoginComponent,
        SignUpComponent,
        AdminSharedComponent
    ],
    providers: [
        UserService,
    ]
})
export class AdminModule {}

