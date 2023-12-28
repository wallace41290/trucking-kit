import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TruckingKitProfileFeatureProfileComponent } from './trucking-kit-profile-feature-profile.component';

describe('TruckingKitProfileFeatureProfileComponent', () => {
  let component: TruckingKitProfileFeatureProfileComponent;
  let fixture: ComponentFixture<TruckingKitProfileFeatureProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckingKitProfileFeatureProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      TruckingKitProfileFeatureProfileComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
