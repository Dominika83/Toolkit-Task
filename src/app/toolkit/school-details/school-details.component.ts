import {Component, OnInit} from '@angular/core';
import {ToolkitService} from '../toolkit.service';
import {ActivatedRoute} from '@angular/router';
import {School} from '../category/school';

@Component({
    selector: 'app-school-details',
    templateUrl: './school-details.component.html',
    styleUrls: ['./school-details.component.scss']
})
export class SchoolDetailsComponent implements OnInit {
    school: School;

    constructor(private toolkitServive: ToolkitService,
                private  route: ActivatedRoute) {
    }

    ngOnInit() {
        this.loadSchool();
    }

    loadSchool() {
        const id = +this.route.snapshot.params['id'];

        this.toolkitServive.getSchool(id).subscribe((school) => {
            this.school = school;
        });
    }
}
