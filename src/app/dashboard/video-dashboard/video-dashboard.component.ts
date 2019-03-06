import { Component, OnInit } from '@angular/core';
import { Video } from '../types';
import { VideoLoaderService } from 'src/app/video-loader.service';
import { Observable, combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state';




@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent  {

  selectedVideo: Observable<Video>;

  constructor(videoSvc: VideoLoaderService, store: Store<AppState>) {
    this.selectedVideo = store.pipe(
      select(state => state.videoState.selectedVideo)
    );
  }

}
