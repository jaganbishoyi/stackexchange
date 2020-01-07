import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { GeneralService } from 'src/app/shared/services/general.service';
import { Question } from 'src/app/shared/interface/interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit {
  subjectName: string;
  subjectId: string;
  pageNumber: number;
  limit: number;
  activeTab = 'votes';
  answers: any;

  subjectDetails: any;
  Questions: Question[];
  step = 0;

  constructor(
    public activatedRoute: ActivatedRoute,
    public generalService: GeneralService,
    public router: Router,
  ) { }

  ngOnInit() {
    // this.getDetails();

    this.answers = this.activatedRoute.snapshot.data.answers.items[0];
    console.log(this.answers);

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        // this.getDetails();
      }
    });
  }

}