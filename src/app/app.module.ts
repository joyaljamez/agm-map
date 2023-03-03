import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListsComponent } from './city-lists/city-lists.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CityListsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBcnxNl_ozX_BPVYMGxX09UORrlBe0JwjA',
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
