import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureTaskComponent } from './feature-task.component';

describe('FeatureTaskComponent', () => {
  let component: FeatureTaskComponent;
  let fixture: ComponentFixture<FeatureTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
