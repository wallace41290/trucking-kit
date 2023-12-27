import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedAuthComponent } from './shared-auth.component';

describe('SharedAuthComponent', () => {
  let component: SharedAuthComponent;
  let fixture: ComponentFixture<SharedAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
