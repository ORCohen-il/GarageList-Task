import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGalleryItemsComponent } from './main-gallery-items.component';

describe('MainGalleryItemsComponent', () => {
  let component: MainGalleryItemsComponent;
  let fixture: ComponentFixture<MainGalleryItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGalleryItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGalleryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
