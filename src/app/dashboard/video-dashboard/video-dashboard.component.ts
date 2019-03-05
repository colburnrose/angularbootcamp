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

  constructor(videoSvc: VideoLoaderService, route: ActivatedRoute) {
    this.video = videoSvc.loadVideos();

    const selectedId: Observable<string> = route.queryParams
      .pipe(
        map(params => params.selected)
      );

    this.selectedVideo = combineLatest(this.video, selectedId)
      .pipe(
        filter(combined => !!(combined[0] && combined.length)),
        map(combined => {
          const videosAry = combined[0];
          const id = combined[1];

          if (!id) {
            return videosAry[0];
          }

          const selected = videosAry.find((v: Video) => v.id === id);
          return selected ? selected : videosAry[0];
        })
      );
  }

}
