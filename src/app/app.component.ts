import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouteAnimation } from './shared/animations/transition-page';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RouteAnimation],
})
export class AppComponent {
  title = 'rick-morty';

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }
}
