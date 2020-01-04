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

  getSubjects() {
    return this.http.get(
      this.constantService.getUrl(this.constantService.SUBJECTS)
    );
  }

  getSubjectDetails(id: string) {
    return this.http.get(
      this.constantService.getUrl(`${this.constantService.SUBJECTS}/${id}`)
    );
  }

  getQuestions(name: string, pageNumber: string, limit: string) {
    return this.http.get(
      this.constantService.getUrl(`/${name}/?_page=${pageNumber}&_limit=${limit}`)
    );
  }
}
