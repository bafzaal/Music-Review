import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';

@Component({
  selector: 'app-open-homepage',
  templateUrl: './open-homepage.component.html',
  styleUrls: ['./open-homepage.component.css'],
  providers: [SongService]
})
export class OpenHomepage implements OnInit {

  constructor(private songService: SongService) { }

  ngOnInit() {
  }

}
