import { Action, select } from '@ngrx/store';
import { Video } from './dashboard/types';


const LOAD_VIDEO_ACTION  = 'LoadVideo';
export class LoadVideo implements Action {
  type = LOAD_VIDEO_ACTION;

  constructor(readonly videos: Video[]){}

}


const SELECT_VIDEO = 'SelectVideo';
export class SelectVideo implements Action {
  type = SELECT_VIDEO;

  constructor(readonly video: Video){}

}

export interface VideoState {
  videos: Video[];
  selectedVideo?: Video;
}


export interface AppState {
  videoState: VideoState;
}

const defaultValue = {videos: [] };
export function videoStateReducer(value: VideoState = defaultValue, action: Action): VideoState {

  switch (action.type) {
    case LOAD_VIDEO_ACTION:
    return {
      videos: (action as LoadVideo).videos,
      selectedVideo: value.selectedVideo
    };
    case SELECT_VIDEO:
    return {
      videos: value.videos,
      selectedVideo: (action as SelectVideo).video
    };

    default:
     return value;
  }
}
