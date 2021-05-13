import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { CardModule } from './shared/card.module';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { HeaderModule } from './header/header.module';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BindingsComponent } from './components/bindings/bindings.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent,
    LifecycleComponent,
    HomeComponent,
    RxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    CardModule,
    HeaderModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
