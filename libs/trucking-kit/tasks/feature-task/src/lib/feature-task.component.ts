import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskService } from '@trucking-kit/tasks/data-access';
import { Task, RequestError } from '@shared/models';

@Component({
  selector: 'tk-feature-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './feature-task.component.html',
  styleUrl: './feature-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureTaskComponent implements OnInit {
  @Input() id!: string;

  currentTask$ = signal<Task | null>(null);
  loadingTask$ = signal(false);
  taskService = inject(TaskService);
  error$ = signal('');
  updateForm: FormGroup;
  updatingTask$ = signal(false);

  constructor(private fb: FormBuilder) {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: [''],
      company: [''],
    });
  }

  ngOnInit(): void {
    this.getTask();
  }

  public async onUpdate(task: Task) {
    this.error$.set('');
    this.updatingTask$.set(true);

    const updatedTask = {
      id: this.id,
      description: task.description,
      dueDate: task.dueDate,
      status: task.status,
      title: task.title,
    };

    this.taskService.updateTask(updatedTask).subscribe({
      next: (results) => {
        this.currentTask$.set(results.data.updateTask);
        console.log('Feat Task Component - GraphQL response', results);
        this.updatingTask$.set(false);
      },
      error: (e) => {
        console.error('error creating Task', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.updatingTask$.set(false);
      },
    });
  }

  private async getTask() {
    this.error$.set('');
    this.loadingTask$.set(true);

    this.taskService.getTask(this.id).subscribe({
      next: (results) => {
        this.currentTask$.set(results.data.getTask);
        console.log(
          'Feat Task Component - GraphQL response',
          this.currentTask$()
        );
        this.updateForm.patchValue({
          title: this.currentTask$()?.title,
          description: this.currentTask$()?.description,
          dueDate: this.currentTask$()?.dueDate,
          status: this.currentTask$()?.status,
          company: this.currentTask$()?.company,
        });

        this.loadingTask$.set(false);
      },
      error: (e) => {
        console.error('error getting Task', e);
        if (this.isRequestError(e) && e.errors.length) {
          this.error$.set(e.errors[0].message);
        }
        this.loadingTask$.set(false);
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
