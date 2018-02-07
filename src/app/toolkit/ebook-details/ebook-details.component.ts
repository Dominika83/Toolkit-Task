import {Component, OnInit} from '@angular/core';
import {ToolkitService} from '../toolkit.service';
import {ActivatedRoute} from '@angular/router';
import {Ebook} from '../category/ebook';

@Component({
    selector: 'app-ebook-details',
    templateUrl: './ebook-details.component.html',
    styleUrls: ['./ebook-details.component.scss']
})
export class EbookDetailsComponent implements OnInit {
    ebook: Ebook;

    constructor(private toolkitServive: ToolkitService,
                private  route: ActivatedRoute) {
    }

    ngOnInit() {
        this.loadEbook();
    }

    loadEbook() {
        const id = +this.route.snapshot.params['id'];

        this.toolkitServive.getEbook(id).subscribe((ebook) => {
            this.ebook = ebook;
        });
    }

}
