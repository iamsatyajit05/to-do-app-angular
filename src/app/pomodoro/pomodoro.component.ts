import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.css']
})
export class PomodoroComponent {
  time: number = 10;
  secondTime: number = 3;
  minute: string = '';
  second: string = '';
  isWork: boolean = true;
  message:string = '';
  showMessage: boolean = false;

  mainTimer: any;
  breakTimer: any;
  pauseBtnVisible: boolean = false;
  resumeBtnVisible: boolean = false;
  startBtnVisible: boolean = false;
  timer: string = '';

  ngOnInit() {
    this.reset();
  }

  formatTime(localTime:any): string {
    const minute = ('0' + Math.floor(localTime / 60)).slice(-2);
    const second = ('0' + (localTime % 60)).slice(-2);
    return minute + ' : ' + second;
  }

  start() {
    if (this.isWork) {
      this.mainTimer = setInterval(() => this.pomodoro(), 1000);
    } else {
      this.breakTimer = setInterval(() => this.takeBreak(), 1000);
    }

    this.pauseBtnVisible = true;
    this.resumeBtnVisible = this.startBtnVisible = false;
  }

  pause() {
    clearInterval(this.mainTimer);
    clearInterval(this.breakTimer as any);
    this.resumeBtnVisible = true;
    this.pauseBtnVisible = this.startBtnVisible = false;
  }

  resume() {
    if (this.time <= 0) {
      this.breakTimer = setInterval(() => this.takeBreak(), 1000);
    } else {
      this.mainTimer = setInterval(() => this.pomodoro(), 1000);
    }

    this.pauseBtnVisible = true;
    this.resumeBtnVisible = this.startBtnVisible = false;
  }

  reset() {
    if (this.isWork) {
      clearInterval(this.mainTimer);
      this.time = 10;
      this.timer = this.formatTime(this.time);
    } else {
      clearInterval(this.breakTimer as any);
      this.secondTime = 3;
      this.timer = this.formatTime(this.secondTime);
    }

    this.startBtnVisible = true;
    this.pauseBtnVisible = this.resumeBtnVisible = false;
  }

  pomodoro() {
    this.minute = ('0' + Math.floor(this.time / 60)).slice(-2);
    this.second = ('0' + (this.time % 60)).slice(-2);
    this.timer = this.formatTime(this.time);

    if (this.time <= 0) {
      this.message = "Hurray It's Time To Take A Break of 5 min!!";
      this.showMessage = true;
      clearInterval(this.mainTimer);
    }
    this.time--;
  }

  messageClear() {
    this.showMessage = false;

    if (this.time <= 0) {
      this.breakTime();
    }
  }

  breakTime() {
    this.breakTimer = setInterval(() => this.takeBreak(), 1000);
  }

  takeBreak() {
    this.isWork = false;
    this.minute = ('0' + Math.floor(this.secondTime / 60)).slice(-2);
    this.second = ('0' + (this.secondTime % 60)).slice(-2);
    this.timer = this.formatTime(this.secondTime);

    if (this.secondTime <= 0) {
      this.showMessage = true;
      this.message = "Hurray, Now It's Time To Get Back To Work!!";
      clearInterval(this.breakTimer as any);
      this.time = 10;
      this.secondTime = 3;
      this.timer = this.formatTime(this.time);
      this.startBtnVisible = true;
      this.pauseBtnVisible = this.resumeBtnVisible = false;
      this.isWork = true;
    }
    this.secondTime--;
  }
}