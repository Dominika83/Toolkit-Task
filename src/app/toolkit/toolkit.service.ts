import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Book} from './category/book';
import {HttpClient} from '@angular/common/http';
import {Ebook} from './category/ebook';
import {Blog} from './category/blog';
import {Course} from './category/course';
import {School} from './category/school';
import {EnglishPosition} from './category/english';


@Injectable()
export class ToolkitService {

    constructor(private http: HttpClient) {
    }

    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>('http://localhost:3000/books');
    }

    getEbooks(): Observable<Ebook[]> {
        return this.http.get<Ebook[]>('http://localhost:3000/ebooks');
    }

    getBlogs(): Observable<Blog[]> {
        return this.http.get<Blog[]>('http://localhost:3000/blogs');
    }

    getCourses(): Observable<Course[]> {
        return this.http.get<Course[]>('http://localhost:3000/courses');
    }

    getSchools(): Observable<School[]> {
        return this.http.get<School[]>('http://localhost:3000/schools');
    }

    getEnglish(): Observable<EnglishPosition[]> {
        return this.http.get<EnglishPosition[]>('http://localhost:3000/english');
    }

    getBook(id: number): Observable<Book> {
        return this.http.get<Book>('http://localhost:3000/books' + '/' + id);
    }

    getEbook(id: number): Observable<Ebook> {
        return this.http.get<Ebook>('http://localhost:3000/ebooks' + '/' + id);
    }

    getBlog(id: number): Observable<Blog> {
        return this.http.get<Blog>('http://localhost:3000/blogs' + '/' + id);
    }

    getCourse(id: number): Observable<Course> {
        return this.http.get<Course>('http://localhost:3000/courses' + '/' + id);
    }

    getSchool(id: number): Observable<School> {
        return this.http.get<School>('http://localhost:3000/schools' + '/' + id);
    }

    getEnglishPosition(id: number): Observable<EnglishPosition> {
        return this.http.get<EnglishPosition>('http://localhost:3000/english' + '/' + id);
    }
}
