import { Component, OnInit } from '@angular/core';
import { Video } from '../types';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://api.angularbootcamp.com/videos';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent  {
  video: Video[] = []; // set equal to the list of videos.

  selectedVideo: Video | undefined;

  constructor(http: HttpClient) {
    http
    .get<Video[]>(apiUrl)
    .subscribe(videos => this.video = videos);
  }
  setVideo(video: Video) {
    this.selectedVideo = video;
  }

}
