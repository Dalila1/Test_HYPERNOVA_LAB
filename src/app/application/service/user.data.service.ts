import {Injectable} from '@angular/core';
import {UserData} from '../model/user.data';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class UserDataService {

  data: UserData[] = [];

  dataSubject$: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);

  storage = window.localStorage;

  constructor() {
    const itemsData = this.storage.getItem('app.userdata.list');
    try {
      this.data = itemsData ? JSON.parse(itemsData) : [];
    } catch (e) {
      this.data = [];
    }
    this.dataSubject$.next(this.data);
  }

  public add(userdata: UserData): void {
    this.data.push(userdata);
    this.storage.setItem('app.userdata.list', JSON.stringify(this.data));
    this.dataSubject$.next(this.data);
  }

  public get data$(): Observable<UserData[]> {
    return this.dataSubject$.asObservable();
  }

}
