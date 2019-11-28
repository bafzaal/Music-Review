import { Component, OnInit } from '@angular/core';

import { SongService } from '../shared/song.service';
import { Song } from '../shared/song.model';

import { ReviewService } from '../shared/review.service';
import { Review } from '../shared/review.model';

@Component({
  selector: 'app-open-song-review',
  templateUrl: './open-song-review.component.html',
  styleUrls: ['./open-song-review.component.css'],
  providers: [SongService, ReviewService]
})
export class OpenSongReviewComponent implements OnInit {

  constructor(private songService: SongService, private reviewService: ReviewService) { }

  ngOnInit() {
    
    this.getSongDetails();
    this.getReviews();
  }

  getSongDetails()
  {
    this.songService.getSpecificSong().subscribe((res :any) => {
      this.songService.selectedItem = res;
    });
  }

  getReviews()
  {
    this.reviewService.getReviewList().subscribe((res :any) => {

      var x = [];
      var n = 0;

      this.reviewService.reviews = res as Review[];

      for(var i = 0; i < this.reviewService.reviews.length; i++)
      {
        if(this.songService.selectedItem.objectID == this.reviewService.reviews[i].objectID)
        {
          x[n] = this.reviewService.reviews[i];
          n++;
        }
      }

      this.reviewService.reviews = x;

    });


  }

}
