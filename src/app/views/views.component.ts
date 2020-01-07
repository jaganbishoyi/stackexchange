import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../shared/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';
import { data } from './data';
import { sites } from './sites';
import { ConstantService } from '../shared/services/constant.service';
@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  questions: any;
  // questions = data.items;
  sites = sites.items;

  selected = 'California';
  states: string[] = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming'
  ];
  constructor(
    public generalService: GeneralService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private constantService: ConstantService
  ) { }

  ngOnInit() {
    this.getQuestions();
    // this.getSites();
    // if (this.activatedRoute.snapshot.data.subjects && this.activatedRoute.snapshot.data.subjects.status) {
    //   this.subjects = this.activatedRoute.snapshot.data.subjects.subjects;
    // } else {
    //   this.subjects = this.activatedRoute.snapshot.data.subjects;
    // }
  }

  navigateToDetails(question_id) {
    this.router.navigate(
      [`questions/${question_id}`],
      {
        queryParams: {
          pagesize: 20,
          order: 'desc',
          sort: 'activity',
          site: 'stackoverflow',
          filter: this.constantService.ANSWERFILTER
        }
      }
    );
  }

  getQuestions() {
    this.generalService.getQuestions().subscribe((res: any) => {
      if (res && res.items && res.items.length) {
        this.questions = res.items;
      }
    });
  }

  getSites() {
    this.generalService.getSites().subscribe(
      (res: any) => {
        debugger;
        console.table(res);
      },
      (error: any) => {
        debugger;
      }
    );
  }
}
