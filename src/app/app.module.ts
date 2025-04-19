import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDialogModule} from '@angular/material/dialog';
import { HeaderComponent } from './core/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { TeamComponent } from './features/team/team.component';
import { FooterComponent } from './core/footer/footer.component';
import { MissionVisionComponent } from "./features/mission-vision/mission-vision.component";
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HeaderComponent,
    HeroComponent,
    AboutUsComponent,
    TeamComponent,
    FooterComponent,
    MissionVisionComponent,
    MatSidenavModule
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
