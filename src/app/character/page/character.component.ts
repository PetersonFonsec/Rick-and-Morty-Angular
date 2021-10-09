import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalComponent } from '../components/modal/modal.component';
import { Character } from '../services/character/character.model';
import { CharacterService } from '../services/character/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  subscriptionGet!: Subscription;
  subscriptionParam!: Subscription;
  subscriptionSearch!: Subscription;
  nameCharacter = '';
  loading = true;

  constructor(
    private characterService: CharacterService,
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
    this.subscriptionSearch?.unsubscribe();
  }

  get() {
    this.loading = true;

    this.subscriptionGet = this.characterService
      .getAll()
      .subscribe((response) => {
        this.loading = false;
        this.characters = response.results;
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
    this.nameCharacter = name;

    this.subscriptionSearch = this.characterService
      .getByQuery({ name })
      .subscribe(
        (response) => {
          this.loading = false;
          this.characters = response.results;
        },
        () => {
          this.loading = false;
          this.characters = [];
        }
      );
  }

  visualize(character: Character) {
    this.dialog.open(ModalComponent, {
      data: character,
    });
  }
}
