import {Component, OnInit} from '@angular/core';
import {ToolkitService} from '../toolkit.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../category/book';

@Component({
    selector: 'app-book-details',
    templateUrl: './book-details.component.html',
    styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
    book: Book;

    constructor(private toolkitServive: ToolkitService,
                private  route: ActivatedRoute) {
    }

    ngOnInit() {
        this.loadBook();
    }

    loadBook() {
        const id = +this.route.snapshot.params['id'];

        this.toolkitServive.getBook(id).subscribe((book) => {
            this.book = book;
        });
    }
}
