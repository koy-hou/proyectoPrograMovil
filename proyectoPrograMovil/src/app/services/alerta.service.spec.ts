import { TestBed } from '@angular/core/testing';

import { AlertaService } from './alerta.service';
import { AngularDelegate, ModalController } from '@ionic/angular';

describe('AlertaService', () => {
  let service: AlertaService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[AlertaService,ModalController,AngularDelegate]});
    service = TestBed.inject(AlertaService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
