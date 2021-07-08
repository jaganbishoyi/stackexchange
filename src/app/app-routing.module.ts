import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./shared/layouts/admin/admin.component";

const routes: Routes = [
  {
    path: "questions",
    loadChildren: () =>
      import("./views/views.module").then((m) => m.ViewsModule),
  },
];

const APP_ROUTES: Routes = [
  {
    path: "",
    redirectTo: "questions",
    pathMatch: "full",
  },
  {
    path: "",
    component: AdminComponent,
    children: routes,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
