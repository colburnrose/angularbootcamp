import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Video } from './dashboard/types';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';

const apiUrl = 'https://api.angularbootcamp.com/videos';

@Injectable({
  providedIn: 'root'
})

export class VideoLoaderService {

private _videoList: Video[] = [];
videoList = new BehaviorSubject<Video[]>(this._videoList);


private _selectedVideo: Video;
selectedVideo = new BehaviorSubject<Video>(this._selectedVideo);

get videoList$() {
  return this.videoList.asObservable();
}

get selectedVideo$() {
  return this.selectedVideo.asObservable();
}

  constructor(private http: HttpClient, route: ActivatedRoute, private router: Router) {
     this.http.get<Video[]>(apiUrl).subscribe(videos => {
      this._videoList = videos;
      this.videoList.next(this._videoList);
    });

    const selectedId: Observable<string> = route.queryParams
      .pipe(
        map(params => params.selected)
      );

     combineLatest(this.videoList, selectedId)
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
      ).subscribe(selectedVideo => {
        this._selectedVideo = selectedVideo;
        this.selectedVideo.next(this._selectedVideo);
      });
  }

 // handle api service for videos.
  makeSelection(id: string) {
    this.router.navigate([], {
      queryParams: {selected: id},
      queryParamsHandling: 'merge'
  });

  }

}
