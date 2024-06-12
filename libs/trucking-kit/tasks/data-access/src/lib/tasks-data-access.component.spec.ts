import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksDataAccessComponent } from './tasks-data-access.component';

describe('TasksDataAccessComponent', () => {
  let component: TasksDataAccessComponent;
  let fixture: ComponentFixture<TasksDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
