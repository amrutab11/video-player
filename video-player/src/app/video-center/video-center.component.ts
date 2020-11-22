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

  hidenewVideo: boolean = true;

  constructor(private _videoService: VideoService) { }
 
  ngOnInit(): void {
    //this._videoService.getVideos()
     // .subscribe(resVideoData => this.videos = resVideoData);
     this.getAllVideos();
     

  }

  getAllVideos(){
    this._videoService.getServiceCall('videos')
    .subscribe(res=>{ 
    console.log("getting all videos...."+res['videos'][0]._id);
     this.videos=res['videos'];
     console.log(this.videos);
    })
  }

  onSelectVideo(video:any){
    this.selectedVideo = video;
    this.hidenewVideo = true;
    console.log(this.selectedVideo);
  }

  addVideo(video:Video){
    this._videoService.postServiceCall('video',video)
    .subscribe(res => {
      console.log("video uploaded successfully...");
      this.videos.push(res);
      this.hidenewVideo = true;
      this.getAllVideos();
    });
  }

  onUpdateVideoEvent(video: any){
    this._videoService.putServiceCall('video',video._id,video)
    .subscribe(res => video = res);
    this.selectedVideo = null;
  }

  onDeleteVideoEvent(video: any){
    let videoArray = this.videos;
    this._videoService.deleteServiceCall('video',video._id,video)
    .subscribe(res => {
      for(let i=0; i<videoArray.length ; i++)
      {
        if(videoArray[i]._id === video._id)
        {
          videoArray.splice(i,1);
        }
      }
    });
    this.selectedVideo=null;
  }

  newVideo(){
    this.hidenewVideo = false;
  }
}
