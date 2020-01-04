import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../shared/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';
import { data } from './data';
@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  // questions: any;
  questions = data.items;
  constructor(
    public generalService: GeneralService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.getQuestions();
    // if (this.activatedRoute.snapshot.data.subjects && this.activatedRoute.snapshot.data.subjects.status) {
    //   this.subjects = this.activatedRoute.snapshot.data.subjects.subjects;
    // } else {
    //   this.subjects = this.activatedRoute.snapshot.data.subjects;
    // }
  }

  getQuestions() {
    this.generalService.getQuestions()
      .subscribe((res: any) => {
        if (res && res.items && res.items.length) {
          this.questions = res.items;
        }
        console.table(res);
      });
  }

}
