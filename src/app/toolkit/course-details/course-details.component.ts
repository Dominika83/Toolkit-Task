import {Component, OnInit} from '@angular/core';
import {ToolkitService} from '../toolkit.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../category/course';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
    course: Course;

    constructor(private toolkitServive: ToolkitService,
                private  route: ActivatedRoute) {
    }

    ngOnInit() {
        this.loadCourse();
    }

    loadCourse() {
        const id = +this.route.snapshot.params['id'];

        this.toolkitServive.getCourse(id).subscribe((course) => {
            this.course = course;
        });
    }

}
