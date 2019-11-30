import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secure-song-list',
  templateUrl: './secure-song-list.component.html',
  styleUrls: ['./secure-song-list.component.css'],
  providers: [SongService]
})
export class SecureSongListComponent implements OnInit {

  constructor(private songService: SongService, private _router: Router) { }

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
      console.log(res);
    });
    //console.log(formData.value.q);
  }

  logout()
  {
    localStorage.removeItem('token');
    this._router.navigate(['/api/open']);
  }

  onSubmitSong(form: NgForm)
  {
    this.getSongs();
    if((form.value.songTitle == "" || form.value.songTitle == null || form.value.songTitle == undefined) &&(form.value.artist == "" || form.value.artist == null || form.value.artist == undefined))
    {
      document.getElementById('title-missing').style.display = "block";
      document.getElementById('artist-missing').style.display = "block";
    }
    else if(form.value.songTitle == "" || form.value.songTitle == null || form.value.songTitle == undefined)
    {
      document.getElementById('artist-missing').style.display = "none";
      document.getElementById('title-missing').style.display = "block";
    }
    else if(form.value.artist == "" || form.value.artist == null || form.value.artist == undefined)
    {
      document.getElementById('title-missing').style.display = "none";
      document.getElementById('artist-missing').style.display = "block";
    }
    else
    {
      form.value.objectID = this.songService.songs.length + 1;
      this.songService.addSong(form.value).subscribe((res) => 
      {
        console.log(res);
        form.reset();
        document.getElementById('title-missing').style.display = "none";
      document.getElementById('artist-missing').style.display = "none";
      });
    }
    this.getSongs();
  }

}
