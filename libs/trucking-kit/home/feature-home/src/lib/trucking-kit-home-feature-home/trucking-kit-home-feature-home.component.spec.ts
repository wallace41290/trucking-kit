import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TruckingKitHomeFeatureHomeComponent } from './trucking-kit-home-feature-home.component';

describe('TruckingKitHomeFeatureHomeComponent', () => {
  let component: TruckingKitHomeFeatureHomeComponent;
  let fixture: ComponentFixture<TruckingKitHomeFeatureHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckingKitHomeFeatureHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TruckingKitHomeFeatureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
