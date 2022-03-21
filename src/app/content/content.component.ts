import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  indicators = true;
  controls = true;
  slideInterval = 3000;
  autoSlide = true;

  selectedIndex = 0;

  images = [
    {
      "imageSrc": "./assets/slide_2.jpg",
      "imageAlt": "image_3",
    },
    {
      "imageSrc": "./assets/slide_3.jpg",
      "imageAlt": "image_1",
    },
    {
      "imageSrc": "./assets/slide_1.jpg",
      "imageAlt": "image_2",
    },

  ]

  constructor() { }

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(index: number) {
    this.selectedIndex = index;
  }
  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    }
    else {
      this.selectedIndex--;
    }
  }
  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
