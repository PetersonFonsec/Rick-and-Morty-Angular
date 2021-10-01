import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Episode } from '../../services/episode/episode.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public episode: Episode) {}

  ngOnInit(): void {}
}
