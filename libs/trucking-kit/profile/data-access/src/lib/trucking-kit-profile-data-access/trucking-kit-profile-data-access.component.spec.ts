import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TruckingKitProfileDataAccessComponent } from './trucking-kit-profile-data-access.component';

describe('TruckingKitProfileDataAccessComponent', () => {
  let component: TruckingKitProfileDataAccessComponent;
  let fixture: ComponentFixture<TruckingKitProfileDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckingKitProfileDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TruckingKitProfileDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
