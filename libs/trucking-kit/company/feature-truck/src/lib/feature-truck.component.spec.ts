import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureTruckComponent } from './feature-truck.component';

describe('FeatureTruckComponent', () => {
  let component: FeatureTruckComponent;
  let fixture: ComponentFixture<FeatureTruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTruckComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
