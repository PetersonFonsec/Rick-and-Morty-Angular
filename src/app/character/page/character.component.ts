import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../components/modal/modal.component';
import { Character } from '../services/character/character.model';
import { CharacterService } from '../services/character/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];
  nameCharacter = '';
  loading = true;

  constructor(
    private characterService: CharacterService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.loading = true;

    this.characterService.getAll().subscribe((response) => {
      this.loading = false;
      this.characters = response.results;
    });
  }

  search(name: string) {
    this.loading = true;
    this.nameCharacter = name;
    this.characterService.getByQuery({ name }).subscribe(
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
