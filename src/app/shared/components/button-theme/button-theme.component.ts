import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-theme',
  templateUrl: './button-theme.component.html',
  styleUrls: ['./button-theme.component.scss'],
})
export class ButtonThemeComponent {
  @Output() clicked = new EventEmitter();

  click(): void {
    this.clicked.emit();
  }
}
