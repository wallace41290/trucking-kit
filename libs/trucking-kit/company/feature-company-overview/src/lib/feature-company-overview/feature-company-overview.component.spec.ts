import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCompanyOverviewComponent } from './feature-company-overview.component';

describe('FeatureCompanyOverviewComponent', () => {
  let component: FeatureCompanyOverviewComponent;
  let fixture: ComponentFixture<FeatureCompanyOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCompanyOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCompanyOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
