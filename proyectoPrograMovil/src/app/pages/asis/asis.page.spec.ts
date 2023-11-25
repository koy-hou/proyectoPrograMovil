import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsisPage } from './asis.page';
import { IonicModule, ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AsisPage', () => {
  let component: AsisPage;
  let fixture: ComponentFixture<AsisPage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ AsisPage ],
      imports: [IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule
                ,HttpClientTestingModule],
      providers:[ModalController,StorageService],
    });
    fixture = TestBed.createComponent(AsisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
