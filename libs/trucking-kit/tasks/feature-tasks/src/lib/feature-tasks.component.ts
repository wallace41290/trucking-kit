import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskService } from '@trucking-kit/tasks/data-access';
import { Task, RequestError } from '@shared/models';

@Component({
  selector: 'tk-feature-tasks',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './feature-tasks.component.html',
  styleUrl: './feature-tasks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTasksComponent {
  taskService = inject(TaskService);
  createForm: FormGroup;

  tasks$ = signal<Task[]>([]);
  creatingTask$ = signal(false);
  error$ = signal('');
  loadingTasks$ = signal(false);

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
    });

    this.fetchTasks();
  }

  public async onCreate(task: Task) {
    this.error$.set('');
    this.creatingTask$.set(true);

    const testCompany = {
      name: 'Company',
      city: 'Knoxville',
      companyName: 'Long Haul Trucking LLC',
      createdAt: '2024-01-30T01:49:58.592Z',
      dotNumber: '1231233',
      state: 'TN',
      streetAddress: '123 First Ave',
      zipCode: 27384,
    };

    const newTask = {
      description: task.description,
      dueDate: task.dueDate,
      status: task.status,
      title: task.title,
      company: testCompany,
    };

    this.taskService.createTask(newTask).subscribe({
      next: (results) => {
        this.tasks$.set([...this.tasks$(), results.data.createTask]);
        console.log('Companies Component - GraphQL response', results);
        this.creatingTask$.set(false);
      },
      error: (e) => {
        console.error('error creating Task', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.creatingTask$.set(false);
      },
    });
  }

  public async onDelete(taskId: string | undefined) {
    if (taskId) {
      this.error$.set('');

      this.taskService.deleteTask(taskId).subscribe({
        next: (results) => {
          this.tasks$.set(this.tasks$().filter((task) => task.id !== taskId));
          console.log('Tasks Component - GraphQL response', results);
        },
        error: (e) => {
          console.error('error deleting truck', e);
          if (this.isRequestError(e) && e.errors.length) {
            this.error$.set(e.errors[0].message);
          }
        },
      });
    }
  }

  private async fetchTasks() {
    this.error$.set('');
    this.loadingTasks$.set(true);

    this.taskService.fetchTasks().subscribe({
      next: (results) => {
        this.tasks$.set(results.data.listTasks.items);
        this.loadingTasks$.set(false);
      },
      error: (e) => {
        console.error('error fetching tasks', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.loadingTasks$.set(false);
      },
    });
  }

  private isRequestError(something: unknown): something is RequestError {
    return (
      !!something &&
      typeof something === 'object' &&
      'errors' in something &&
      Array.isArray(something.errors)
    );
  }
}
