import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { BindingsComponent } from './bindings/bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
