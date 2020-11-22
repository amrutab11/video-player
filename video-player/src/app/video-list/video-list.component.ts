import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  //inputs:['videos']
})
export class VideoListComponent implements OnInit {

  @Input() videos;

  @Output() SelectVideo=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(vid:Video){
    this.SelectVideo.emit(vid);
  }
}
