import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../nasa-api.service';

@Component({
  selector: 'app-nasa-picture',
  templateUrl: './nasa-picture.component.html',
  styleUrls: ['./nasa-picture.component.css']
})
export class NasaPictureComponent implements OnInit {

  pictureData: any;

  constructor(private nasaApiService: NasaApiService) { }

  ngOnInit(): void {
    this.nasaApiService.getPictureOfTheDay().subscribe(data => {
      this.pictureData = data;
    });
  }
}
