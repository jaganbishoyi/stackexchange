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

  getQuestions() {
    return this.http.get(
      this.constantService.getUrl(
        `${this.constantService.QUESTIONS}/?order=desc&sort=hot&pagesize=10&site=stackoverflow&filter=${this.constantService.QUESTIONFILTER}`
      )
    );
  }
  
  getQuestionsById(id) {
    return this.http.get(
      this.constantService.getUrl(
        `${this.constantService.QUESTIONS}/${id}/?order=desc&sort=activity&pagesize=10&site=stackoverflow&filter=${this.constantService.ANSWERFILTER}`

      )
    );
  }

  getQuestionById(id: string) {
    return this.http.get(
      this.constantService.getUrl(`${this.constantService.QUESTIONS}/${id}`)
    );
  }
}
