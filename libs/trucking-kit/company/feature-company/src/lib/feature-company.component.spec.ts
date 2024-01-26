import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCompanyComponent } from './feature-company.component';

describe('FeatureCompanyComponent', () => {
  let component: FeatureCompanyComponent;
  let fixture: ComponentFixture<FeatureCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCompanyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
