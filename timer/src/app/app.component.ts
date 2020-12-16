import  {Observable, interval, Subscription} from 'rxjs'
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isStarted = false
  totalSeconds = 0
  interval = interval(1000)
  startInterval : Subscription
  
  get seconds(): number {
    return this.totalSeconds % 60
  }
  get minutes(): number {
    return Math.floor(this.totalSeconds / 60) % 60
  }
  get hours(): number {
    return Math.floor(this.totalSeconds / 3600)
  }

  convertToString(value: number) {
    return value.toString().padStart(2, '0')
  }

  startTimer() {
    if(!this.isStarted) {
      this.isStarted = !this.isStarted

      this.startInterval = this.interval.subscribe(() => this.totalSeconds++)
    } else {
      this.isStarted = !this.isStarted

      this.startInterval.unsubscribe()

      this.totalSeconds = 0
    }
  }

  reset() {
    this.totalSeconds = 0
  }
}
