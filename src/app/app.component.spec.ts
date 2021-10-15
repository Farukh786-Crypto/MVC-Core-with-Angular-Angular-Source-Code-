import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PatientComponent } from './app.PatientComponent';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PatientComponent
      ],
      
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PatientComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-first-project'`, () => {
    const fixture = TestBed.createComponent(PatientComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('my-first-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PatientComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('my-first-project app is running!');
  });
});
