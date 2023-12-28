import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedHttpClientComponent } from './shared-http-client.component';

describe('SharedHttpClientComponent', () => {
  let component: SharedHttpClientComponent;
  let fixture: ComponentFixture<SharedHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedHttpClientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
