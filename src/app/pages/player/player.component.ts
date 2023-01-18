import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { CloudService } from 'src/app/services/cloud.service';
import { StreamState } from 'src/app/interface/stream-state';
import { timer } from 'rxjs';
import { viewClassName } from '@angular/compiler';
import { MatGridTile } from '@angular/material';
import { Route, UrlTree } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {}; public

  // introduction
  introduction:boolean = false;
  clickIntro(){
    this.introduction =  true;
  }

  clickHome(){
    this.introduction =  false;
  }
  gmail(){
    open('https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new/mrsagarkatad@gmail.com');
  }


  // songs
  bollywood() {
    this.cloudService.getFilesB().subscribe(files => {
      this.files = files;
    });
  }

  punjabi() {
    this.cloudService.getFilesP().subscribe(files => {
      this.files = files;
    });
  }

  marathi() {
    this.cloudService.getFilesM().subscribe(files => {
      this.files = files;
    });
  }

  southindian() {
    this.cloudService.getFilesS().subscribe(files => {
      this.files = files;
    });
  }

  worldwide() {
    this.cloudService.getFilesW().subscribe(files => {
      this.files = files;
    });
  }

  // open insta
  openInsta() {
    open('https://www.instagram.com/sagarshivajikatad/');
  }

  constructor(private audioService: AudioService, private cloudService: CloudService) {

    // get media files
    cloudService.getFilesM().subscribe(files => {
      this.files = files;
    });

    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }


  // play stream
  playStream(url: any) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  // openFile
  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  // pause method
  pause() {
    this.audioService.pause();
  }

  // play method
  play() {
    this.audioService.play();
  }

  // stop method
  stop() {
    this.audioService.stop();
  }

  // next method
  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  // previoud method
  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  // isFirst playing
  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  // is last playing
  isLastplaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  // slider change
  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  ngOnInit() {
  }

}

