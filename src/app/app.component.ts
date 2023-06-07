import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import icons from '../storage/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  icon?: IconDefinition;
  readonly iconTimeout = 3000;

  generateRandomIcon(): void {
    setTimeout(() => {
      const iconNames = Object.keys(icons);
      const randomNameIndex = Math.floor(Math.random() * iconNames.length);
      const randomName = iconNames[randomNameIndex];

      this.icon = icons[randomName];
    }, this.iconTimeout);
  };
}
