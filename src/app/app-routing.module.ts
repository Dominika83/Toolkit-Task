import {NgModule} from '@angular/core';
import {ToolkitListComponent} from './toolkit/toolkit-list/toolkit-list.component';
import {Route, RouterModule} from '@angular/router';

const APP_ROUTES: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'toolkit'},
    { path: 'toolkit', component: ToolkitListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
