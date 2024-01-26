import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureTrucksComponent } from './feature-trucks.component';

describe('FeatureTrucksComponent', () => {
  let component: FeatureTrucksComponent;
  let fixture: ComponentFixture<FeatureTrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTrucksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
