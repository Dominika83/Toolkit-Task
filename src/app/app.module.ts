import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ToolkitModule} from './toolkit/toolkit.module';
import {CoreModule} from './core-module/core.module';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {ToolkitRoutingModule} from './toolkit/toolkit-routing.module';
import {ToolkitService} from './toolkit/toolkit.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ToolkitModule,
        CoreModule,
        AppRoutingModule,
        ToolkitRoutingModule,
        HttpClientModule,
    ],
    providers: [
        ToolkitService,
        HttpClientModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
