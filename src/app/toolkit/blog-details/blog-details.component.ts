import {Component, OnInit} from '@angular/core';
import {Blog} from '../category/blog';
import {ToolkitService} from '../toolkit.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
    blog: Blog;

    constructor(private toolkitServive: ToolkitService,
                private  route: ActivatedRoute) {
    }

    ngOnInit() {
        this.loadBlog();
    }

    loadBlog() {
        const id = +this.route.snapshot.params['id'];

        this.toolkitServive.getBlog(id).subscribe((blog) => {
            this.blog = blog;
        });
    }
}
