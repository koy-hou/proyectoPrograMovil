import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsisDatosPage } from './asis-datos.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('AsisDatosPage', () => {
  let component: AsisDatosPage;
  let fixture: ComponentFixture<AsisDatosPage>;

  beforeEach((() => {
    const activatedRoutes={
      snapshot:{
        params:{
          nombre:'test'
        },
    },
    paramMap: new BehaviorSubject({}),};
    TestBed.configureTestingModule({
      declarations: [ AsisDatosPage ],
      imports: [IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule
                ,HttpClientTestingModule],
      providers:[{provide: ModalController, useValue: {} },StorageService,{provide: ActivatedRoute,useValue: activatedRoutes }],
    });
    fixture = TestBed.createComponent(AsisDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
