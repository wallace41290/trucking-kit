import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDriversComponent } from './feature-drivers.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatureDriversComponent', () => {
  let component: FeatureDriversComponent;
  let fixture: ComponentFixture<FeatureDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDriversComponent, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
