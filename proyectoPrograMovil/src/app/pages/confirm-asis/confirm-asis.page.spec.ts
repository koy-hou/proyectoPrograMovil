import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmAsisPage } from './confirm-asis.page';

describe('ConfirmAsisPage', () => {
  let component: ConfirmAsisPage;
  let fixture: ComponentFixture<ConfirmAsisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmAsisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
