import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedErrorHandlerComponent } from './shared-error-handler.component';

describe('SharedErrorHandlerComponent', () => {
  let component: SharedErrorHandlerComponent;
  let fixture: ComponentFixture<SharedErrorHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedErrorHandlerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
