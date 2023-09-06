import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscanPage } from './escan.page';

describe('EscanPage', () => {
  let component: EscanPage;
  let fixture: ComponentFixture<EscanPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EscanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
