import { Component, OnInit, OnDestroy } from "@angular/core";
import { GeneralService } from "../shared/services/general.service";
import { Router, ActivatedRoute } from "@angular/router";
import { sites } from "./sites";
import { ConstantService } from "../shared/services/constant.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-views",
  templateUrl: "./views.component.html",
  styleUrls: ["./views.component.scss"]
})
export class ViewsComponent implements OnInit, OnDestroy {
  questions: any;
  private QuestionSubscription: Subscription;
  // questions = data.items;
  sites = sites.items;
  pageSize = "15";
  page = 1;
  pageMeta: any;

  selected = "California";
  states: string[] = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];
  constructor(
    public generalService: GeneralService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private constantService: ConstantService
  ) {}

  ngOnInit() {
    this.getQuestions();
  }

  ngOnDestroy() {
    if (this.QuestionSubscription) {
      this.QuestionSubscription.unsubscribe();
    }
  }

  navigateToDetails(question_id) {
    this.router.navigate([`questions/${question_id}`], {
      queryParams: {
        pagesize: 20,
        order: "desc",
        sort: "votes",
        site: "stackoverflow",
        filter: this.constantService.ANSWERFILTER
      }
    });
  }

  getQuestions(filter?) {
    let filterString =
      filter && filter.length ? filter : this.constantService.DEFAULTFILTER;
    if (!filter) {
      this.router.navigate(["questions"]);
    }
    this.QuestionSubscription = this.generalService
      .getQuestions(filterString)
      .subscribe((res: any) => {
        if (res && res.items && res.items.length) {
          this.questions = res.items;
          this.pageMeta = {
            page: res.page,
            page_size: res.page_size,
            total: res.total,
            quota_remaining: res.quota_remaining,
            quota_max: res.quota_max,
            has_more: res.has_more
          };
        }
      });

  }

  jumpToPage(event) {
    this.page = event;
    this.router.navigate(["questions"], {
      queryParams: {
        page: this.page
      }
    });
    const filterString = `order=desc&sort=hot&page=${this.page}&pagesize=${this.pageSize}&site=${this.constantService.DEFAULTSITE}&filter=${this.constantService.QUESTIONFILTER}`;
    this.getQuestions(filterString);
    this.scrollToTop();
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  pageSizeChanged() {
    this.router.navigate(["questions"], {
      queryParams: {
        pageSize: this.pageSize
      }
    });
    this.page = 1;
    const filterString = `order=desc&sort=hot&page=1&pagesize=${this.pageSize}&site=${this.constantService.DEFAULTSITE}&filter=${this.constantService.QUESTIONFILTER}`;
    this.getQuestions(filterString);
    this.scrollToTop();
  }

  trackByQuestionId(index: number, question: any): string {
    return question.question_id;
  }

  // getSites() {
  //   this.generalService.getSites().subscribe(
  //     (res: any) => {
  //       debugger;
  //       console.table(res);
  //     },
  //     (error: any) => {
  //       debugger;
  //     }
  //   );
  // }
}
