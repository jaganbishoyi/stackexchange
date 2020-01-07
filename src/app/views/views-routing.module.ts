import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { DetailsComponent } from './details/details.component';
import { AnswerResolver } from '../shared/resolver/answer.resolver';

const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
  },
  {
    path: ':question_id',
    component: DetailsComponent,
    resolve: { answers: AnswerResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule { }
