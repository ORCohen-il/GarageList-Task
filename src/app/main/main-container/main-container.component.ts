import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { ServiceRepository } from 'src/app/services/Service_repository';
import { Areas } from 'src/assets/models/areas';
import { Garage, GarageResponse } from 'src/assets/models/garage';
import gragesData from '../../../assets/data/grages_data.json';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss'],
  providers: [ServiceRepository],
})
export class MainContainerComponent implements OnInit {
  constructor(private service: ServiceRepository) {}

  collator = new Intl.Collator('he', { sensitivity: 'base' });

  areas: Areas = { Data: [] };
  garageList: Garage[] = gragesData.Data.GaragesList;

  onChange(City?: string, Area?: string) {
    this.service.getGarageList(City, Area).subscribe({
      next: (response: GarageResponse) => {
        if (response != null) {
          this.garageList = response.Data.GaragesList;
        }
      },

      error: (e: HttpErrorResponse) => {
        console.log(e);
        alert('התרחשה תקלה חריגה');
      },

      complete: () => {
        if (this.garageList) {
          this.garageList.sort((a, b) => this.collator.compare(a.Name, b.Name));
        }
      }
    });
  }

  ngOnInit(): void {

    // That's method get all the Areas From API
    this.service.getAreas().subscribe({
      next: (res: Areas) => {
        if (res.Data) {
          this.areas.Data = res.Data;
        } else {
          alert('Can"t find Areas from server !');
        }
      },
      error: (e: HttpErrorResponse) => {
        alert(e.message);
      },
    });

    // That's method get all the garages From API
    this.service.getGarageList().subscribe({
      next: (res: GarageResponse) => {
        if (res.Data) {
          this.garageList = res.Data.GaragesList;
        } else {
          alert('Can"t find Areas from server !');
        }
      },
      error: (e: HttpErrorResponse) => {
        console.log(e);
      },

      complete: () => {
        if (this.garageList) {
          this.garageList.sort((a, b) => this.collator.compare(a.Name, b.Name));
        }
      },
    });

    // That sort the grage array from a-z.
    this.garageList.sort((a, b) => this.collator.compare(a.Name, b.Name));
  }
}
