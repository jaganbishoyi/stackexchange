import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';

const components = [
  AdminComponent,
  HeaderComponent,
  FooterComponent
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule
  ],
  declarations: components,
  exports: components,
})
export class LayoutsModule { }
