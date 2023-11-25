import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarContraPage } from './recuperar-contra.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RecuperarContraPage', () => {
  let component: RecuperarContraPage;
  let fixture: ComponentFixture<RecuperarContraPage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarContraPage ],
      imports: [IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule
                ,HttpClientTestingModule],
      providers:[ModalController],
    });
    fixture = TestBed.createComponent(RecuperarContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
