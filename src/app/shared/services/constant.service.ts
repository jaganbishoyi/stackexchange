import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ConstantService {
  SERVER_URL: string = environment.SERVER_URL;
  API_URL: string = environment.API_ENDPOINT;

  QUESTIONS = "questions";
  SITES = "sites";

  QUESTIONFILTER = "!b1MMEAHGb38s-n";
  ANSWERFILTER = "!3ykawH3kKhpITWlu9";
  DEFAULTSITE = "stackoverflow";
  DEFAULTFILTER = `order=desc&sort=hot&page=1&pagesize=15&site=${this.DEFAULTSITE}&filter=${this.QUESTIONFILTER}`;

  constructor() {}

  getUrl(path: string, params: Array<any> = []) {
    return !params.length
      ? [this.API_URL, path].join("")
      : [[this.API_URL, path].join(""), params.join("/")].join("/");
  }
}
