import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolkitListComponent} from './toolkit-list/toolkit-list.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {RouterModule} from '@angular/router';
import {EbookDetailsComponent} from './ebook-details/ebook-details.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';
import {SchoolDetailsComponent} from './school-details/school-details.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {EnglishDetailsComponent} from './english-details/english-details.component';
import {SharedModule} from '../shared-module/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        SharedModule,
    ],
    declarations: [
        ToolkitListComponent,
        BookDetailsComponent,
        EbookDetailsComponent,
        BlogDetailsComponent,
        SchoolDetailsComponent,
        CourseDetailsComponent,
        EnglishDetailsComponent
    ]
})
export class ToolkitModule {
}
