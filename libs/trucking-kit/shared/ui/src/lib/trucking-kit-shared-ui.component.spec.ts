import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TruckingKitSharedUiComponent } from './trucking-kit-shared-ui.component';

describe('TruckingKitSharedUiComponent', () => {
  let component: TruckingKitSharedUiComponent;
  let fixture: ComponentFixture<TruckingKitSharedUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruckingKitSharedUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TruckingKitSharedUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
