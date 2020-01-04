import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GeneralService } from '../services/general.service';

@Injectable()
export class SubjectsDetailsResolver implements Resolve<Observable<object>> {

    constructor(private generalService: GeneralService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<object> {
        return this.generalService.getSubjectDetails(
            route.paramMap.get('subjectId')
        ).pipe(
            catchError(() => {
                return of({ value: [], message: 'No Data Found' });
            })
        );
    }
}
