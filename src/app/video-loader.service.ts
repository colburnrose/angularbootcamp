import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Video } from './dashboard/types';
import { Effect, Actions, ROOT_EFFECTS_INIT, ofType } from '@ngrx/effects';
import { AppState, LoadVideo, SelectVideo } from './state';
import { map, switchMap } from 'rxjs/operators';

const apiUrl = 'https://api.angularbootcamp.com/videos';


@Injectable()
export class VideoLoaderService {


  constructor(private http: HttpClient, private action$: Actions) {

  }

 // handle api service for videos.

  @Effect()
  init$ = this.action$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    switchMap(() => this.http.get<Video[]>(apiUrl)),
    map((videos: Video[]) => new LoadVideo(videos))
  );

}
