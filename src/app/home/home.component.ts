import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../cards/card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isDataLoaded = false;
  // isDataLoaded = true;

  //  Get these data from the API
  games: {
    game_id: number;
    game_name: string;
    game_short_description: string;
    game_spotlight_image: string;
    game_status: string;
    game_release_date: Date;
  }[] = [];

  // games: any = [
  //   {
  //     game_id: 5,
  //     game_name: 'Kitchen Krapper',
  //     game_short_description:
  //       "Get organized and stay on top of your tasks with our powerful task management app. With intuitive features and seamless integration across devices, you'll never miss a deadline or forget an important task again.",
  //     game_spotlight_image:
  //       'https://res.cloudinary.com/dubwbz83k/image/upload/v1/media/game/images/game_spotlight_images/img_001_bt7maj',
  //     game_status: 'Coming Soon',
  //     game_release_date: '2023-04-05',
  //   },
  // ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // API URL
    const API_URL =
      'https://playcenter.azurewebsites.net/playcenter/games/?format=json';

    this.http.get(API_URL).subscribe((response: any) => {
      this.games = response.results;
      this.isDataLoaded = true;
    });
    // this.populateGamesArray(30);
  }

  // Make a function to populate the games array with games array for testing purposes, the function should get the number of games to be populated as a parameter
  // populateGamesArray(numGames: number) {
  //   for (let i = 0; i < numGames-1; i++) {
  //     this.games.push({
  //       game_id: i,
  //       game_name: 'Kitchen Krapper',
  //       game_short_description:
  //         "Get organized and stay on top of your tasks with our powerful task management app. With intuitive features and seamless integration across devices, you'll never miss a deadline or forget an important task again.",
  //       game_spotlight_image:
  //         'https://res.cloudinary.com/dubwbz83k/image/upload/v1/media/game/images/game_spotlight_images/img_001_bt7maj',
  //       game_status: 'Coming Soon',
  //       game_release_date: '2023-04-05',
  //     });
  //   }
  // }

  // Banner URL
  bannerImageUrl = '/assets/images/banner_001.jpg';
  placeholderImageUrl = '/assets/images/placeholder-image.jpg';

  getCardClasses() {
    const numCards = this.isDataLoaded ? this.games.length : 4;
    if (numCards < 4) {
      return `row-cols-${numCards} row-cols-sm-${numCards} row-cols-md-${numCards} g-4`;
    } else {
      return 'row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4';
    }
  }

  createRange(placeholdercount: number) {
    // return new Array(number);
    return new Array(placeholdercount).fill(0).map((n, index) => index + 1);
  }

  // Truncate text
  truncateText(text: string, length: number) {
    if (text.length > length) {
      return text.substring(0, length) + '...';
    } else {
      return text;
    }
  }

  // Use the truncateText function in the template
  // <p class="card-text">{{ truncateText(game.game_short_description, 100) }}</p>
}
