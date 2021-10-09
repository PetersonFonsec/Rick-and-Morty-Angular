import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalComponent } from '../components/modal/modal.component';
import { Location } from '../services/location/location.model';
import { LocationService } from '../services/location/location.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit, OnDestroy {
  locations: Location[] = [];
  subscriptionGet!: Subscription;
  subscriptionParam!: Subscription;
  subscriptionSeach!: Subscription;
  locationName = '';
  loading = true;

  constructor(
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.get();
    this.handleQueryParams();
  }

  ngOnDestroy(): void {
    this.subscriptionGet?.unsubscribe();
    this.subscriptionParam?.unsubscribe();
    this.subscriptionSeach?.unsubscribe();
  }

  handleQueryParams() {
    this.subscriptionParam = this.activatedRoute.queryParams.subscribe(
      (query) => {
        query?.name ? this.search(query.name) : this.get();
      }
    );
  }

  get() {
    this.loading = true;

    this.subscriptionGet = this.locationService
      .getAll()
      .subscribe((response) => {
        this.loading = false;
        this.locations = response.results;
      });
  }

  search(name: string) {
    this.loading = true;
    this.locationName = name;

    this.subscriptionSeach = this.locationService
      .getByQuery({ name })
      .subscribe(
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

  visualize(data: Location): void {
    this.dialog.open(ModalComponent, { data });
  }
}
