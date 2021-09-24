import { Component, OnInit } from '@angular/core';
import {
  faUsers,
  faPlaceOfWorship,
  faImages,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  faUsers = faUsers;
  faImages = faImages;
  faPlaceOfWorship = faPlaceOfWorship;

  constructor() {}

  ngOnInit(): void {}
}
