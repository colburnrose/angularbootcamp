import { Component, OnInit } from '@angular/core';
import { Video } from '../types';
import { VideoLoaderService } from 'src/app/video-loader.service';
import { Observable, combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';



@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent  {
  video: Observable<Video[]>; // set equal to the list of videos.
  selectedVideo: Observable<Video>;

  constructor(videoSvc: VideoLoaderService) {
    this.video = videoSvc.videoList$;
    this.selectedVideo = videoSvc.selectedVideo$;
  }

}
