import { Component, OnInit } from '@angular/core';
import { Video } from '../types';
import { VideoLoaderService } from 'src/app/video-loader.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent  {
  video: Observable<Video[]>; // set equal to the list of videos.

  selectedVideo: Video | undefined;

  constructor(videoSvc: VideoLoaderService) {
    this.video = videoSvc.loadVideos();
  }

  setVideo(video: Video) {
    this.selectedVideo = video;
  }

}
