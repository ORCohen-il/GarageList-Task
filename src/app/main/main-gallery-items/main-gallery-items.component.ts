import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ServiceRepository } from 'src/app/services/Service_repository';
import { Garage, GarageResponse } from 'src/assets/models/garage';

@Component({
  selector: 'app-main-gallery-items',
  templateUrl: './main-gallery-items.component.html',
  styleUrls: ['./main-gallery-items.component.scss'],
  providers: [ServiceRepository],
})
export class MainGalleryItemsComponent {
  constructor(private service: ServiceRepository) {}

  @Input()
  garageList: Garage[] = [];


}
