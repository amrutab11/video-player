import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';


@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  videos: any;

  selectedVideo: Video;

  constructor(private _videoService: VideoService) { }
 
  ngOnInit(): void {
    //this._videoService.getVideos()
     // .subscribe(resVideoData => this.videos = resVideoData);
     //this.getAllVideos();
     this._videoService.getServiceCall()
      .subscribe(res=>{ 
      console.log("getting all videos...."+res['videos'][0]._id);
       this.videos=res['videos'];
       console.log(this.videos);
      });

  }

  onSelectVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
