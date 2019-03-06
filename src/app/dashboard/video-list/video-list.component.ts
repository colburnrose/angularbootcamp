// jshint esversion 6
// tslint:disable-next-line:quotemark

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Video} from '../types';
import { VideoLoaderService } from 'src/app/video-loader.service';
import { Store, select } from '@ngrx/store';
import { AppState, SelectVideo } from 'src/app/state';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent  {
  @Input() selected: Video;

  videos: Observable<Video[]>; // set equal the video list

  // @Output() selectVideo = new EventEmitter<Video>();

 constructor(private store: Store<AppState>) {
   this.videos = store.pipe(
     select(state => state.videoState.videos)
   );
 }

   onClick(video: Video) {
     this.store.dispatch(new SelectVideo(video));
   }


 }
