import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarmascotasComponent } from './editarmascotas.component';

describe('EditarmascotasComponent', () => {
  let component: EditarmascotasComponent;
  let fixture: ComponentFixture<EditarmascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarmascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarmascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
