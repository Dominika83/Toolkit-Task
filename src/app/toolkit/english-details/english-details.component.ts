import {Component, OnInit } from '@angular/core';
import {ToolkitService} from '../toolkit.service';
import {ActivatedRoute} from '@angular/router';
import {EnglishPosition} from '../category/english';

@Component({
  selector: 'app-english-details',
  templateUrl: './english-details.component.html',
  styleUrls: ['./english-details.component.scss']
})
export class EnglishDetailsComponent implements OnInit {
    english: EnglishPosition;

    constructor(private toolkitServive: ToolkitService,
                private  route: ActivatedRoute) {
    }

    ngOnInit() {
        this.loadEnglish();
    }

    loadEnglish() {
        const id = +this.route.snapshot.params['id'];

        this.toolkitServive.getEnglishPosition(id).subscribe((english) => {
            this.english = english;
        });
    }
}
