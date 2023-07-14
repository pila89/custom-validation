import { Component, OnInit } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss'],
})
export class AsyncComponent implements OnInit {
  asyncPromise?: Promise<string>;
  asyncObservable?: Observable<string>;
  ngOnInit(): void {
    this.asyncPromise = this.makePromise('result with promise');
    this.asyncObservable = this.makeOservable('result with observable');
  }

  makePromise(value: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, 3000);
    });
  }
  makeOservable(value: string): Observable<string> {
    return of(value).pipe(delay(3000));
  }
}
