import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyDataAccessComponent } from './company-data-access.component';

describe('CompanyDataAccessComponent', () => {
  let component: CompanyDataAccessComponent;
  let fixture: ComponentFixture<CompanyDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
