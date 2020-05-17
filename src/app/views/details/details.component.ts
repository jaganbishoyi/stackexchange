import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralService } from 'src/app/shared/services/general.service';
import { ConstantService } from 'src/app/shared/services/constant.service';
import { Subscription } from 'rxjs';
import { LocalStoreService } from 'src/app/shared/services/local-storage.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsComponent implements OnInit, OnDestroy {
  activeTab = 'votes';
  answers: any;
  pageSize = '15';
  page = 1;
  pageMeta: any;
  private AnswersSubscription: Subscription;

  constructor(
    public activatedRoute: ActivatedRoute,
    public generalService: GeneralService,
    public router: Router,
    public constantService: ConstantService,
    public store: LocalStoreService,
  ) {}

  ngOnInit() {
    this.scrollToTop();
    this.answers = this.activatedRoute.snapshot.data.answers.items[0];
  }

  ngOnDestroy() {
    if (this.AnswersSubscription) {
      this.AnswersSubscription.unsubscribe();
    }
  }

  scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  sortAnswer(sort: string) {
    this.router.navigate(
      [`questions/${this.activatedRoute.snapshot.paramMap.get('question_id')}`],
      {
        queryParams: {
          pagesize: 20,
          order: 'desc',
          sort,
          site: this.store.getItem('site'),
          filter: this.constantService.ANSWERFILTER
        }
      }
    );
    const filterString = `order=desc&sort=${sort}&page=${this.page}&pagesize=${this.pageSize}&site=${this.constantService.SITE}&filter=${this.constantService.ANSWERFILTER}`;
    this.getAnswers(
      this.activatedRoute.snapshot.paramMap.get('question_id'),
      filterString
    );
  }

  getAnswers(id, filterString?) {
    this.AnswersSubscription = this.generalService
      .getQuestionsById(id, filterString)
      .subscribe((res: any) => {
        if (res && res.items && res.items.length) {
          this.answers = res.items[0];
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
}
