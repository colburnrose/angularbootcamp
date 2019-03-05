// jshint esversion 6
// tslint:disable-next-line:quotemark

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Video} from '../types';



@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent  {
  @Input() selected: Video;

  @Input() videos: Video[]; // set equal the video list

  @Output() selectVideo = new EventEmitter<Video>();

 constructor() {}

 pickVideo(video: Video) {
   this.selectVideo.emit(video);
 }

}
