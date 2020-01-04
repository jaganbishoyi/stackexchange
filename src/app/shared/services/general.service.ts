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

  getQuestions() {
    return this.http.get(
      this.constantService.getUrl(
        `${this.constantService.QUESTIONS}/?order=desc&sort=hot&site=stackoverflow`
      )
    );
  }
}
