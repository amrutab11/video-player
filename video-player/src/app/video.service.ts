import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VideoService {

  _getUrl = "http://localhost:3000/api/videos/";
  constructor(private _http: HttpClient) { }

  /*getVideos(){
    console.log(this._http.get(this._getUrl));
    return this._http.get(this._getUrl)
      .map((response: Response)=> response.json());
  }*/

  getServiceCall() {
    return this._http.get(this._getUrl);
  }

}
