import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { GeneralService } from '../services/general.service';
import { ConstantService } from '../services/constant.service';

@Injectable()
export class AnswerResolver implements Resolve<any> {
  constructor(
    private generalService: GeneralService,
    private constantService: ConstantService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.generalService.getQuestionsById(
      route.paramMap.get('question_id'), this.constantService.DEFAULTFILTERANSWER
    );
  }
}
