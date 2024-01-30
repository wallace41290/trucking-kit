import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureProductsComponent } from './feature-products.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FeatureProductsComponent', () => {
  let component: FeatureProductsComponent;
  let fixture: ComponentFixture<FeatureProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureProductsComponent, RouterTestingModule.withRoutes([])],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
