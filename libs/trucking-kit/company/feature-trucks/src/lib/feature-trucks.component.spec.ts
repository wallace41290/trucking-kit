import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureTrucksComponent } from './feature-trucks.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatureTrucksComponent', () => {
  let component: FeatureTrucksComponent;
  let fixture: ComponentFixture<FeatureTrucksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTrucksComponent, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTrucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
