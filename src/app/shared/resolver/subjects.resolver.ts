import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { GeneralService } from '../services/general.service';

@Injectable()
export class SubjectsResolver implements Resolve<Observable<object>> {

    constructor(private generalService: GeneralService) { }

    resolve(): Observable<object> {
        return this.generalService.getSubjects().pipe(
            catchError(() => {
                return of({ value: [], message: 'No Subjects Found' });
            })
        );
    }
}
