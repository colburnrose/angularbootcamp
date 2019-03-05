import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Video } from './dashboard/types';

const apiUrl = 'https://api.angularbootcamp.com/videos';

@Injectable({
  providedIn: 'root'
})
export class VideoLoaderService {

  constructor(private http: HttpClient) {
  }

 // handle api service for videos.
  loadVideos(): Observable<Video[]> {
   return this.http.get<Video[]>(apiUrl);

  }

}
