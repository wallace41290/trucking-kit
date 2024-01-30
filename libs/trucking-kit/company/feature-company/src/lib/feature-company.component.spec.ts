import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCompanyComponent } from './feature-company.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatureCompanyComponent', () => {
  let component: FeatureCompanyComponent;
  let fixture: ComponentFixture<FeatureCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCompanyComponent, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
