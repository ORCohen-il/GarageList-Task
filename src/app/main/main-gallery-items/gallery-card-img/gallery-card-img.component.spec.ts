import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCardImgComponent } from './gallery-card-img.component';

describe('GalleryCardImgComponent', () => {
  let component: GalleryCardImgComponent;
  let fixture: ComponentFixture<GalleryCardImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryCardImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryCardImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
