import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavBarComponent} from './shared/nav-bar/nav-bar.component';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import {AppRoutingModule} from './shared/app.routing';
import {AdminModule} from './admin/admin.module';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        HomeComponent,
        ErrorComponent,
    ],
    imports: [
        BrowserModule,
        AdminModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
