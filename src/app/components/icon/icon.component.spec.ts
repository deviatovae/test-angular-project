import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';
import { faLaptop, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconComponent],
      imports: [FontAwesomeModule]
    });
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    component.icon = faLaptop;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the Font Awesome icon', () => {
    const iconElement = fixture.nativeElement.querySelector('.icon fa-icon') as HTMLElement;
    expect(iconElement).toBeTruthy();

    const laptopSVG = iconElement
      .querySelector(`svg[data-prefix="${faLaptop.prefix}"][data-icon="${faLaptop.iconName}"]`)
    expect(laptopSVG).toBeTruthy();
  });
});
