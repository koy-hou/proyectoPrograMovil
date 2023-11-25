import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfimarAsisPage } from './confimar-asis.page';

describe('ConfimarAsisPage', () => {
  let component: ConfimarAsisPage;
  let fixture: ComponentFixture<ConfimarAsisPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(ConfimarAsisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
