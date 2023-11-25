import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmAsisPage } from './confirm-asis.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ConfirmAsisPage', () => {
  let component: ConfirmAsisPage;
  let fixture: ComponentFixture<ConfirmAsisPage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmAsisPage  ],
      imports: [IonicModule.forRoot(),HttpClientTestingModule],
      providers:[ModalController],
    });
    fixture = TestBed.createComponent(ConfirmAsisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
