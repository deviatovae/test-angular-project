import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, ButtonComponent, IconComponent],
    imports: [FontAwesomeModule]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-project app is running!');
  });

  it('should not display icon as default behavior', () => {
    const { debugElement } = TestBed.createComponent(AppComponent);
    const icon = debugElement.query(By.css('app-icon'));
    expect(icon).toBeFalsy();
  });

  it('should display icon if set', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const { debugElement, componentInstance: comp } = fixture;
    comp.icon = faGoogle;
    fixture.detectChanges();
    const icon = debugElement.query(By.css('app-icon'));
    expect(icon).toBeTruthy();
  });

  it('should display icon after timeout', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const { debugElement, componentInstance: comp } = fixture;
    const getIcon = () => debugElement.query(By.css('app-icon'))

    comp.generateRandomIcon();
    fixture.detectChanges();
    expect(getIcon()).toBeFalsy();

    tick(comp.iconTimeout);
    fixture.detectChanges();
    expect(getIcon()).toBeTruthy();
  }));
});
