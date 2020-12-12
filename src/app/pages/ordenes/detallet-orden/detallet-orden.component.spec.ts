import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalletOrdenComponent } from './detallet-orden.component';

describe('DetalletOrdenComponent', () => {
  let component: DetalletOrdenComponent;
  let fixture: ComponentFixture<DetalletOrdenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalletOrdenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalletOrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
