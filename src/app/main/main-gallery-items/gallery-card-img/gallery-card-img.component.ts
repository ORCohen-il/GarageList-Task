import { Component, Input } from '@angular/core';
import { Garage } from 'src/assets/models/garage';

@Component({
  selector: 'app-gallery-card-img',
  templateUrl: './gallery-card-img.component.html',
  styleUrls: ['./gallery-card-img.component.scss'],
})
export class GalleryCardImgComponent {
  @Input()
  item!: Garage;
}
