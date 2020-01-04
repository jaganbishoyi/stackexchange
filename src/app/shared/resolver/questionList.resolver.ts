import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GeneralService } from '../services/general.service';

@Injectable()
export class QuestionListResolver implements Resolve<Observable<object>> {

    constructor(private generalService: GeneralService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<object> {
        return this.generalService.getQuestions(
            route.paramMap.get('subjectName'),
            route.paramMap.get('pageNumber'),
            route.paramMap.get('limit')
        ).pipe(
            catchError(() => {
                return of({ value: [], message: 'No Data Found' });
            })
        );
    }
}
