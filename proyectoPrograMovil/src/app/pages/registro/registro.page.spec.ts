import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { AngularFireModule } from '@angular/fire/compat';
import { IonicModule, ModalController } from '@ionic/angular';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPage ],
      imports: [IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule
                ,HttpClientTestingModule],
      providers:[ModalController],
    });
    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Registro Inicio de Manera Correcta', () => {
    expect(component.correo).toEqual('');
    expect(component.contra).toEqual('');
    expect(component.nombre).toEqual('');
    expect(component.apellido).toEqual('');
    expect(component.numero).toEqual(0);
  });
});
