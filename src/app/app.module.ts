import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { GalleryCardImgComponent } from './main/main-gallery-items/gallery-card-img/gallery-card-img.component';
import { MainContainerComponent } from './main/main-container/main-container.component';
import { MainGalleryItemsComponent } from './main/main-gallery-items/main-gallery-items.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    MainGalleryItemsComponent,
    GalleryCardImgComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule,HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
