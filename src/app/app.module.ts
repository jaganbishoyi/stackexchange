import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AnswerResolver } from './shared/resolver/answer.resolver';
import { NgHttpLoaderModule } from 'ng-http-loader';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [AnswerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
