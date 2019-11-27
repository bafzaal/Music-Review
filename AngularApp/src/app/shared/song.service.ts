import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Song } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  selectedItem: Song|{}={};
  songs: Song[];
  readonly baseURL = 'http://localhost:8080/api/open/song'

  constructor(private http : HttpClient) { }

  getSongList()
  {
    return this.http.get(this.baseURL);
  }

}
