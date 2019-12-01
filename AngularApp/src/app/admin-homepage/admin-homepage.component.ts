import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';

import { ReviewService } from '../shared/review.service';
import { Review } from '../shared/review.model';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css'],
  providers: [User, UserService, SongService]
})
export class AdminHomepageComponent implements OnInit {

  constructor(private _router: Router, private userService: UserService, private user: User, private songService: SongService) { }

  ngOnInit() {
    this.findAllUsers();
    this.getSongs();
  }

  logout()
  {
    localStorage.removeItem('token');
    this._router.navigate(['/api/open']);
  }

  findAllUsers()
  {
    this.userService.findAllUsers().subscribe((res) => {
      this.userService.users = res as User[];
    });

  }

  grantPriv(s: string)
  {
    this.userService.updateUserAccess(s).subscribe((res) => {
      console.log(res);
      this.findAllUsers();
    });
  }

  actdeact(s: string)
  {
    this.userService.updateUserActivation(s).subscribe((res) => {
      console.log(res);
      this.findAllUsers();
    });
  }

  getSongs()
  {
    this.songService.getSongList().subscribe((res) => {
      this.songService.songs = res as Song[];
    });
  }

  changeVis(s: string)
  {
    this.songService.changeVisibility(s).subscribe((res) => {
      console.log(res);
      this.getSongs();
    });
  }

}
