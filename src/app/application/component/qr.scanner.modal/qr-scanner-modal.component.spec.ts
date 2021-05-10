import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrScannerModalComponent } from './qr-scanner-modal.component';

describe('QrScannerModalComponent', () => {
  let component: QrScannerModalComponent;
  let fixture: ComponentFixture<QrScannerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrScannerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrScannerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
