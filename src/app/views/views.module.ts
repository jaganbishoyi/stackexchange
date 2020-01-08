import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnswersComponent } from './answers/answers.component';

@NgModule({
  declarations: [
    ViewsComponent,
    DetailsComponent,
    AnswersComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ViewsModule { }
