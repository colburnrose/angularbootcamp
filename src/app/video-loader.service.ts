import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Video } from './dashboard/types';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState, LoadVideo, SelectVideo } from './state';

const apiUrl = 'https://api.angularbootcamp.com/videos';

@Injectable({
  providedIn: 'root'
})

export class VideoLoaderService {


  constructor(private http: HttpClient, private store: Store<AppState>) {
     this.http.get<Video[]>(apiUrl).subscribe(videos => {
      this.store.dispatch(new LoadVideo(videos));
    });

  }

 // handle api service for videos.
  makeSelection(video: Video) {
    this.store.dispatch(new SelectVideo(video));
  }

}
