import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';
import { Episode } from '../services/episode/episode.model';
import { EpisodeService } from '../services/episode/episode.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent implements OnInit {
  episodes: Episode[] = [];
  nameEpisodes = '';
  loading = true;

  constructor(
    private episodeService: EpisodeService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.loading = true;
    this.episodeService.getAll().subscribe((response) => {
      this.loading = false;
      this.episodes = response.results;
    });
  }

  search(name: string) {
    this.loading = true;
    this.nameEpisodes = name;

    this.episodeService.getByQuery({ name }).subscribe(
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
