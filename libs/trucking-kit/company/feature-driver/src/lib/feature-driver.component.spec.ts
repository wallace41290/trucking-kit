import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDriverComponent } from './feature-driver.component';

describe('FeatureDriverComponent', () => {
  let component: FeatureDriverComponent;
  let fixture: ComponentFixture<FeatureDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDriverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
