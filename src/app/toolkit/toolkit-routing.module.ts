import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {BookDetailsComponent} from './book-details/book-details.component';
import {EbookDetailsComponent} from './ebook-details/ebook-details.component';
import {BlogDetailsComponent} from './blog-details/blog-details.component';
import {CourseDetailsComponent} from './course-details/course-details.component';
import {SchoolDetailsComponent} from './school-details/school-details.component';
import {EnglishDetailsComponent} from './english-details/english-details.component';

const TOOLKIT_ROUTES: Route[] = [
    {path: 'books/:id', component: BookDetailsComponent},
    {path: 'ebooks/:id', component: EbookDetailsComponent},
    {path: 'blogs/:id', component: BlogDetailsComponent},
    {path: 'courses/:id', component: CourseDetailsComponent},
    {path: 'schools/:id', component: SchoolDetailsComponent},
    {path: 'english/:id', component: EnglishDetailsComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(TOOLKIT_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class ToolkitRoutingModule {
}
