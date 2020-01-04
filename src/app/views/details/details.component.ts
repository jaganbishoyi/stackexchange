import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { GeneralService } from 'src/app/shared/services/general.service';
import { Question } from 'src/app/shared/interface/interface';
import {
  MatBottomSheet,
  MAT_BOTTOM_SHEET_DATA
} from '@angular/material/bottom-sheet';

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

  subjectDetails: any;
  Questions: Question[];
  step = 0;

  constructor(
    public activatedRoute: ActivatedRoute,
    public generalService: GeneralService,
    public router: Router,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    // this.getDetails();

    if (this.activatedRoute.snapshot.data.details && this.activatedRoute.snapshot.data.details.status) {
      this.subjectDetails = this.activatedRoute.snapshot.data.details.subject;
    } else {
      this.subjectDetails = this.activatedRoute.snapshot.data.details;
    }

    if (this.activatedRoute.snapshot.data.questions && this.activatedRoute.snapshot.data.questions.status) {
      this.Questions = this.activatedRoute.snapshot.data.questions[this.subjectName];
    } else {
      this.Questions = this.activatedRoute.snapshot.data.questions;
    }

    this.router.events.subscribe(e => {
      if (e instanceof NavigationStart) {
        // this.getDetails();
        // this.getQuestions(this.subjectName, this.pageNumber, this.limit);
      }
    });
  }

  getDetails() {
    this.activatedRoute.params.subscribe(params => {
      this.subjectName = params.subjectName;
      this.subjectId = params.subjectId;
      this.pageNumber = +params.pageNumber;
      this.limit = params.limit;
    });
  }

  // getSubDetails() {
  //   this.generalService
  //     .getSubjectDetails(this.subjectId)
  //     .subscribe((res: any) => {
  //       if (res && res.status && res.status.code === 200) {
  //         this.subjectDetails = res.subject;
  //       }
  //       if (!res.status) {
  //         this.subjectDetails = res;
  //       }
  //     });
  // }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  previousPage() {
    this.pageNumber = this.pageNumber - 1;
    this.step = 0;
    this.router.navigate([
      'views/details',
      this.subjectName,
      this.subjectId,
      this.pageNumber,
      this.limit
    ]);
  }

  nextPage() {
    this.pageNumber = this.pageNumber + 1;
    this.step = 0;
    this.router.navigate([
      'views/details',
      this.subjectName,
      this.subjectId,
      this.pageNumber,
      this.limit
    ]);
  }

  firstPage() {
    this.pageNumber = 1;
    this.step = 0;
    this.router.navigate([
      'views/details',
      this.subjectName,
      this.subjectId,
      this.pageNumber,
      this.limit
    ]);
  }

  // getQuestions(name, page, limit) {
  //   this.generalService
  //     .getQuestions(name, page, limit)
  //     .subscribe((res: any) => {
  //       if (res && res.status && res.status.code === 200) {
  //         this.Questions = res[this.subjectName];
  //       }
  //       if (!res.status) {
  //         this.Questions = res;
  //       }
  //     });
  // }
}