import {Component, OnInit} from '@angular/core';
import {Book} from '../category/book';
import {Ebook} from '../category/ebook';
import {Blog} from '../category/blog';
import {School} from '../category/school';
import {EnglishPosition} from '../category/english';
import {Course} from '../category/course';
import {ToolkitService} from '../toolkit.service';

@Component({
    selector: 'app-toolkit-list',
    templateUrl: './toolkit-list.component.html',
    styleUrls: ['./toolkit-list.component.scss']
})
export class ToolkitListComponent implements OnInit {

    books: Book [];
    ebooks: Ebook [];
    blogs: Blog [];
    courses: Course [];
    schools: School [];
    english: EnglishPosition [];

    constructor(private toolkitService: ToolkitService) {
    }

    ngOnInit() {
        this.loadBooks();
        this.loadEbooks();
        this.loadBlogs();
        this.loadCourses();
        this.loadSchools();
        this.loadEnglish();
    }

    loadBooks(): void {
        this.toolkitService.getBooks().subscribe((books) => {
            this.books = books;
        });
    }

    loadEbooks(): void {
        this.toolkitService.getEbooks().subscribe((ebooks) => {
            this.ebooks = ebooks;
        });
    }

    loadBlogs(): void {
        this.toolkitService.getBlogs().subscribe((blogs) => {
            this.blogs = blogs;
        });
    }

    loadCourses(): void {
        this.toolkitService.getCourses().subscribe((courses) => {
            this.courses = courses;
        });
    }

    loadSchools(): void {
        this.toolkitService.getSchools().subscribe((schools) => {
            this.schools = schools;
        });
    }

    loadEnglish(): void {
        this.toolkitService.getEnglish().subscribe((english) => {
            this.english = english;
        });
    }
}


