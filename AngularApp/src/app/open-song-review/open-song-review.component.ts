import { Component, OnInit } from '@angular/core';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';

@Component({
  selector: 'app-open-song-review',
  templateUrl: './open-song-review.component.html',
  styleUrls: ['./open-song-review.component.css'],
  providers: [SongService]
})
export class OpenSongReviewComponent implements OnInit {

  constructor(private songService: SongService) { }

  ngOnInit() {
    
    this.getSongDetails();
  }

  getSongDetails()
  {
    this.songService.getSpecificSong().subscribe((res) => {
      this.songService.selectedItem = res;
    });
  }

}
