import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalComponent } from '../components/modal/modal.component';
import { Episode } from '../services/episode/episode.model';
import { EpisodeService } from '../services/episode/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit, OnDestroy {
  episodes: Episode[] = [];
  subscriptionGet!: Subscription;
  subscriptionSearch!: Subscription;
  subscriptionParam!: Subscription;
  nameEpisodes = '';
  loading = true;

  constructor(
    private episodeService: EpisodeService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.handleQueryParams();
    this.get();
  }

  ngOnDestroy(): void {
    this.subscriptionGet?.unsubscribe();
    this.subscriptionParam?.unsubscribe();
    this.subscriptionSearch?.unsubscribe();
  }

  get() {
    this.loading = true;
    this.subscriptionGet = this.episodeService
      .getAll()
      .subscribe((response) => {
        this.loading = false;
        this.episodes = response.results;
      });
  }

  handleQueryParams() {
    this.subscriptionParam = this.activatedRoute.queryParams.subscribe(
      (query) => {
        query?.name ? this.search(query.name) : this.get();
      }
    );
  }

  search(name: string) {
    this.loading = true;
    this.nameEpisodes = name;

    this.subscriptionSearch = this.episodeService
      .getByQuery({ name })
      .subscribe(
        (response) => {
          this.loading = false;
          this.episodes = response.results;
        },
        () => {
          this.loading = false;
          this.episodes = [];
        }
      );
  }

  visualize(data: Episode): void {
    this.dialog.open(ModalComponent, { data });
  }
}
