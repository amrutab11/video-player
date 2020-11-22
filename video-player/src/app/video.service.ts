import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders,HttpRequest} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';
import { Video } from './video';



@Injectable({
  providedIn: 'root'
})
export class VideoService {

  _baseUrl = "http://localhost:4000/api/";
  
  constructor(private _http: HttpClient) { }

  /*getVideos(){
    console.log(this._http.get(this._getUrl));
    return this._http.get(this._getUrl)
      .map((response: Response)=> response.json());
  }*/

  getServiceCall(url:string) {
    return this._http.get(this._baseUrl+url);
  }

  postServiceCall(url:string,body){
    return this._http.post(this._baseUrl + url, body);
  }

  putServiceCall(url:string,id:string,body){
    return this._http.put(this._baseUrl+url+"/"+id,body);
  }

  deleteServiceCall(url:string,id:string,body){
    return this._http.delete(this._baseUrl+url+"/"+id);
  }

}
