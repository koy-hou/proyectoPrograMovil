import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscanPage } from './escan.page';
import { IonicModule} from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('EscanPage', () => {
  let component: EscanPage;
  let fixture: ComponentFixture<EscanPage>;

  beforeEach((() => {
    const activatedRoutes={
      snapshot:{
        params:{
          nombre:'test'
        },
    },
    paramMap: new BehaviorSubject({}),};
    TestBed.configureTestingModule({
      declarations: [ EscanPage ],
      imports: [IonicModule.forRoot(),HttpClientTestingModule],
      providers:[{provide: ActivatedRoute,useValue: activatedRoutes }],
    });
    fixture = TestBed.createComponent(EscanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
