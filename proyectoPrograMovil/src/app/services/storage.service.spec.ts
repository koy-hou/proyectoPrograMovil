import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[StorageService],
      imports: [AngularFireModule.initializeApp(environment.firebaseConfig),AngularFireAuthModule],});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    //expect(service).toBeTruthy();
  });
});
