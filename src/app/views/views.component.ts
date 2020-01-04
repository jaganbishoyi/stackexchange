import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../shared/services/general.service";
import { Router, ActivatedRoute } from "@angular/router";
import { data } from "./data";
import { sites } from "./sites";
@Component({
  selector: "app-views",
  templateUrl: "./views.component.html",
  styleUrls: ["./views.component.scss"]
})
export class ViewsComponent implements OnInit {
  // questions: any;
  questions = data.items;
  sites = sites.items;

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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.getQuestions();
    // this.getSites();
    // if (this.activatedRoute.snapshot.data.subjects && this.activatedRoute.snapshot.data.subjects.status) {
    //   this.subjects = this.activatedRoute.snapshot.data.subjects.subjects;
    // } else {
    //   this.subjects = this.activatedRoute.snapshot.data.subjects;
    // }
  }

  getQuestions() {
    this.generalService.getQuestions().subscribe((res: any) => {
      if (res && res.items && res.items.length) {
        this.questions = res.items;
      }
      console.table(res);
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
