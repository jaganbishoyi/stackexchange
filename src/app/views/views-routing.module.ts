import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { DetailsComponent } from './details/details.component';
import { SubjectsResolver } from '../shared/resolver/subjects.resolver';
import { SubjectsDetailsResolver } from '../shared/resolver/subjectsDetails.resolver';
import { QuestionListResolver } from '../shared/resolver/questionList.resolver';


const routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
  },
  {
    path: 'details/:subjectName/:subjectId/:pageNumber/:limit',
    component: DetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsRoutingModule { }
