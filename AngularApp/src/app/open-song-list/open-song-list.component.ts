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

}
