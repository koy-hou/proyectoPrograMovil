import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuPrinPage } from './menu-prin.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlertaService } from 'src/app/services/alerta.service';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

describe('MenuPrinPage', () => {
  let component: MenuPrinPage;
  let fixture: ComponentFixture<MenuPrinPage>;

  beforeEach((() => {
    const activatedRoutes={
      snapshot:{
        params:{
          nombre:'test'
        },
    },
    paramMap: new BehaviorSubject({}),};
    TestBed.configureTestingModule({
      declarations: [ MenuPrinPage ],
      imports: [IonicModule.forRoot(),HttpClientTestingModule,AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule],
      providers:[ModalController,AlertaService,ModalController,{provide: ActivatedRoute,useValue: activatedRoutes }],
    });
    fixture = TestBed.createComponent(MenuPrinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
