import { Injectable } from '@angular/core';
import { ConstantService } from './constant.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(
    public http: HttpClient,
    public constantService: ConstantService
  ) { }
  getSites() {
    return this.http.get(
      this.constantService.getUrl(`${this.constantService.SITES}/?pagesize=1000&${this.constantService.SITE_FILTER}`)
    );
  }

  getQuestions(filterString: string) {
    return this.http.get(
      this.constantService.getUrl(
        `${this.constantService.QUESTIONS}/?${filterString}`
      )
    );
  }

  getQuestionsById(id, filterString) {
    return this.http.get(
      this.constantService.getUrl(
        `${this.constantService.QUESTIONS}/${id}/?${filterString}`
      )
    );
  }

  getQuestionById(id: string) {
    return this.http.get(
      this.constantService.getUrl(`${this.constantService.QUESTIONS}/${id}`)
    );
  }
}
