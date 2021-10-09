import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
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

  constructor(
    private themeService: ThemeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }

  async search(name: string) {
    const currentPage = this.router.url.split('?')[0];
    this.router.navigate([currentPage], { queryParams: { name } });
  }
}
