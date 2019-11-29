import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';
import { error } from 'util';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-open-homepage',
  templateUrl: './open-homepage.component.html',
  styleUrls: ['./open-homepage.component.css'],
  providers: [SongService, UserService]
})
export class OpenHomepage implements OnInit {

  constructor(private songService: SongService, private userService: UserService) { }

  ngOnInit() {
  }

  registerUser()
  {
    console.log(this.userService.registerUserData);
    this.userService.register(this.userService.registerUserData).subscribe(
      res =>  document.getElementById('result').innerText = "Registration Complete",
      err => document.getElementById('result').innerText = err.error
    )
    this.userService.registerUserData = 
    {
      username: "",
      email: "",
      password: ""
    }


  }

}
