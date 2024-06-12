import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureTasksComponent } from './feature-tasks.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatureTasksComponent', () => {
  let component: FeatureTasksComponent;
  let fixture: ComponentFixture<FeatureTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureTasksComponent, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
