import { Component, OnInit } from '@angular/core';
import { Location } from '../services/location/location.model';
import { LocationService } from '../services/location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  locations: Location[] = [];
  locationName = '';
  loading = true;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.loading = true;

    this.locationService.getAll().subscribe((response) => {
      this.loading = false;
      this.locations = response.results;
    });
  }

  search(name: string) {
    this.loading = true;
    this.locationName = name;

    this.locationService.getByQuery({ name }).subscribe(
      (response) => {
        this.loading = false;
        this.locations = response.results;
      },
      () => {
        this.loading = false;
        this.locations = [];
      }
    );
  }
}
