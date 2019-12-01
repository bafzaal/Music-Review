import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';

@Component({
  selector: 'app-open-song-list',
  templateUrl: './open-song-list.component.html',
  styleUrls: ['./open-song-list.component.css'],
  providers: [SongService]
})
export class OpenSongListComponent implements OnInit {

  constructor(private songService: SongService) { }

  ngOnInit() {
  this.getSongs();
  }

  getSongs()
  {
    this.songService.getSongList().subscribe((res) => {
      this.songService.songs = res as Song[];
    });
  }

  submitSearch(event, formData)
  {
    //console.log(event);
    this.songService.getSearchString(formData.value.q).subscribe((res) => {
      this.songService.matchedSongs = res as Song[];

      var x = [];

      for(var i = 0; i < this.songService.matchedSongs.length; i++)
      {
        if(this.songService.matchedSongs[i].visibility == true)
        {
          x.push(this.songService.matchedSongs[i]);
        }
      }

      this.songService.matchedSongs = x;

      console.log(res);
    });
    //console.log(formData.value.q);
  }

}
