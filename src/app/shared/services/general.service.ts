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
      this.constantService.getUrl(`${this.constantService.SITES}`)
    );
  }

  getQuestions(filterString: string) {
    return this.http.get(
      this.constantService.getUrl(
        `${this.constantService.QUESTIONS}/?${filterString}`
      )
    );
  }
  
  getQuestionsById(id) {
    return this.http.get(
      this.constantService.getUrl(
        `${this.constantService.QUESTIONS}/${id}/?order=desc&sort=activity&pagesize=15&site=stackoverflow&filter=${this.constantService.ANSWERFILTER}`

      )
    );
  }

  getQuestionById(id: string) {
    return this.http.get(
      this.constantService.getUrl(`${this.constantService.QUESTIONS}/${id}`)
    );
  }
}
