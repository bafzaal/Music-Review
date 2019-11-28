import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable} from 'rxjs';
import { Song } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  selectedItem: Song|{}={};
  songs: Song[];
  readonly baseURL = 'http://localhost:8080/api/open/song/'

  constructor(private http : HttpClient, private router : Router) { }

  getSongList()
  {
    return this.http.get(this.baseURL);
  }

  getSpecificSong()
  {
    var base = this.baseURL
    var url = this.router.url;
    console.log(url.split('/')[3]);
    url = base + url.split('/')[3];
    
    return this.http.get(url);
  }

}
