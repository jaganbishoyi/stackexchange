import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LocalStoreService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ConstantService {
  SERVER_URL: string = environment.SERVER_URL;
  API_URL: string = environment.API_ENDPOINT;
  constructor(
    public store: LocalStoreService,
  ) { }

  QUESTIONS = 'questions';
  SITES = 'sites';

  QUESTIONFILTER = '!b1MMEAHEe7qxq6';
  ANSWERFILTER = '!3ykawH3klP-3bXZ6a';
  SITE_FILTER = '!*7PNmV3F3NL97DJxPqv4LxouYjFt';
  DEFAULTFILTER = `order=desc&sort=hot&page=1&pagesize=15&site=${this.store.getItem('site')}&filter=${this.QUESTIONFILTER}`;
  DEFAULTFILTERANSWER = `order=desc&sort=activity&pagesize=15&site=${this.store.getItem('site')}&filter=${this.ANSWERFILTER}`;

  getUrl(path: string, params: Array<any> = []) {
    return !params.length
      ? [this.API_URL, path].join('')
      : [[this.API_URL, path].join(''), params.join('/')].join('/');
  }
}
