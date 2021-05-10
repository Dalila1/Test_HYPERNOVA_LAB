import {Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Component({
  selector: 'app-qr-scanner-modal',
  templateUrl: './qr-scanner-modal.component.html',
  styleUrls: ['./qr-scanner-modal.component.scss']
})
export class QrScannerModalComponent implements OnInit {

  @ViewChild('qrScanner', {static: true, read: QrScannerComponent}) qrScannerComponent: QrScannerComponent;

  @Output() read: EventEmitter<any> = new EventEmitter<any>();

  result$: Subject<string> = new BehaviorSubject<any>('');

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.captureQr();
  }

  captureQr(): void {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      // console.log(devices);
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      this.result$.next(result);
      this.read.emit(result);
    });
  }

  getResult(): Observable<string> {
    return this.result$.asObservable();
  }

  stopQrScanner(): void {
    this.qrScannerComponent.stopScanning();
  }
}
