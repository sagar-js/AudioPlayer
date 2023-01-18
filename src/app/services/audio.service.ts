import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Pipe } from '@angular/core';
import * as moment from 'moment';
import { StreamState } from '../interface/stream-state';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private stop$ = new Subject();
  private audioObj = new Audio();
  audioEvents = [
    "ended", "error", "play", "playing", "pause", "timeupdate", "canplay", "loadedmetadata", "loadstart"
  ];

  private state: StreamState = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false,
  }

  // streamObservable
  private streamObservable(url) {
    return new Observable(observer => {

      // play audio
      this.audioObj.src = url;
      this.audioObj.load();
      this.audioObj.play();

      const handler = (event: Event) => {
        this.updateStateEvents(event);
        observer.next(event);
      };

      this.addEvents(this.audioObj, this.audioEvents, handler);
      return () => {

        // stop playing
        this.audioObj.pause();
        this.audioObj.currentTime = 0;

        // remove event listners
        this.removeEvents(this.audioObj, this.audioEvents, handler);

        // reset state
        this.resetState();
      };
    });
  }

  // add event
  private addEvents(obj, events, handler) {
    events.forEach(event => {
      obj.addEventListener(event, handler);
    });
  }

  // remover event
  private removeEvents(obj, events, handler) {
    events.forEach(event => {
      obj.removeEventListener(event, handler);
    });
  }

  playStream(url: any) {
    return this.streamObservable(url).pipe(takeUntil(this.stop$));
  }

  play() {
    this.audioObj.play();
  }

  pause() {
    this.audioObj.pause();
  }

  stop() {
    this.stop$.next();
  }

  seekTo(seconds: any) {
    this.audioObj.currentTime = seconds;
  }

  formatTime(time: number, format: string = "HH:mm:ss") {
    const momentTime = time * 1000;
    return moment.utc(momentTime).format(format);
  }

  private stateChange: BehaviorSubject<StreamState> = new BehaviorSubject(this.state);

  private updateStateEvents(event: Event): void {
    switch (event.type) {
      case "canplay":
        this.state.duration = this.audioObj.duration;
        break;

      case "playing":
        this.state.playing = true;
        this.state.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(this.state.currentTime);
        break;

      case "pause":
        this.state.playing = false;
        break;

      case "timeupdate":
        this.state.currentTime = this.audioObj.currentTime;
        this.state.readableCurrentTime = this.formatTime(this.state.currentTime);
        break;

      case "error":
        this.resetState();
        this.state.error = true;
        break;
    }

    this.stateChange.next(this.state);
  }

  // reset state
  private resetState() {
    this.state = {
      playing: false,
      readableCurrentTime: '',
      readableDuration: '',
      duration: undefined,
      currentTime: undefined,
      canplay: false,
      error: false,
    }
  }

  getState(): Observable<StreamState> {
    return this.stateChange.asObservable();
  }

}
