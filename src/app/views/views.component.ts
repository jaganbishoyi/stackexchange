import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../shared/services/general.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss']
})
export class ViewsComponent implements OnInit {
  subjects: any;
  constructor(
    public generalService: GeneralService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getSub();
    // if (this.activatedRoute.snapshot.data.subjects && this.activatedRoute.snapshot.data.subjects.status) {
    //   this.subjects = this.activatedRoute.snapshot.data.subjects.subjects;
    // } else {
    //   this.subjects = this.activatedRoute.snapshot.data.subjects;
    // }
  }

  getSub() {
    this.generalService.getSubjects()
      .subscribe((res: any) => {
        if (res && res.status && res.status.code === 200) {
          this.subjects = res.subjects;
        }
        if (!res.status) {
          this.subjects = res;
        }
      });
  }

}
