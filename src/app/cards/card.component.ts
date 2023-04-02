import { Component, Input } from '@angular/core';
// const ColorThief = require('colorthief');

@Component({
  selector: 'app-card',
  template: `
    <div class="col">
      <div
        class="card"
        [ngStyle]="{
          background:
            'linear-gradient(rgba(230, 182, 85, 0.3), rgba(230, 182, 85, 9)), url(' +
            imageUrl +
            ')'
        }"
      >
        <div class="card-body">
          <div class="row row-col-2 align-items-start">
            <div class="col">
            <img *ngIf="imageUrl" [src]="imageUrl" class="icon" alt="..." />
            </div>
            <div class="col">
              <span class="badge text-bg-danger" *ngIf="showChip">{{
                chip
              }}</span>
            </div>
          </div>
          <h4 class="card-title">{{ title }}</h4>
          <div class="row row-col-2 align-items-end">
            <div class="col">
              <p class="card-text">{{ description }}</p>
            </div>
            <div class="col">
              <a
                [routerLink]="['/game', game_id]"
                class="btn btn-light rounded-pill"
                >{{ getStatus }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() status!: string;
  @Input() release_date!: Date;
  @Input() game_id!: number;

  // Placeholder image URL
  placeholderImageUrl = '/assets/images/placeholder-image.jpg';

  public backgroundImageUrl: string =
    'https://cdn.vox-cdn.com/thumbor/WQUdc3xNK0SKOW1Kjhoz05mp3EE=/0x266:1280x1024/1200x800/filters:focal(535x535:739x739)/cdn.vox-cdn.com/uploads/chorus_image/image/56638317/AnimalCrossing_wallpaper_1280x1024-C.0.jpg';

  constructor() {}

  ngOnInit(): void {
    if (this.imageUrl === '') {
      this.imageUrl = this.placeholderImageUrl;
    }

    const img = this.imageUrl;

    // ColorThief.getColor(img)
    //   .then((color: any) => {
    //     console.log(color);
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //   });

    // ColorThief.getPalette(img, 5)
    //   .then((palette: any) => {
    //     console.log(palette);
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //   });
  }

  // Get current date
  get today() {
    return new Date();
  }

  // Get chip
  get chip() {
    this.release_date = new Date(this.release_date);
    if (this.release_date > this.today) {
      return 'Upcoming';
    } else if (
      this.release_date < this.today &&
      this.release_date >
        new Date(this.today.getTime() - 30 * 24 * 60 * 60 * 1000)
    ) {
      return 'New';
    } else {
      return '';
    }
  }

  get showChip() {
    return this.chip !== '';
  }

  get getStatus() {
    switch (this.status) {
      case 'Coming Soon':
        return 'GET';
      case 'Released':
        return 'Get Now';
      case 'Early Access':
        return 'Get Now';
      case 'Cancelled':
        return 'Cancelled';
      case 'Beta':
        return 'Get Now';
      case 'Alpha':
        return 'Get Now';
      case 'Demo':
        return 'Get Now';
      default:
        return 'Coming Soon';
    }
  }
}
