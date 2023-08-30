import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPrinPage } from './menu-prin.page';

describe('MenuPrinPage', () => {
  let component: MenuPrinPage;
  let fixture: ComponentFixture<MenuPrinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuPrinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
