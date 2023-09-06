import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsisDatosPage } from './asis-datos.page';

describe('AsisDatosPage', () => {
  let component: AsisDatosPage;
  let fixture: ComponentFixture<AsisDatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsisDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
