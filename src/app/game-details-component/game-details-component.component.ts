import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-details-component',
  templateUrl: './game-details-component.component.html',
  styleUrls: ['./game-details-component.component.css'],
})
export class GameDetailsComponentComponent {
//   {
//     "game_id": 5,
//     "game_name": "Kitchen Krapper",
//     "game_short_description": "Get organized and stay on top of your tasks with our powerful task management app. With intuitive features and seamless integration across devices, you'll never miss a deadline or forget an important task again.",
//     "game_description": "Our task management app is designed to help you take control of your to-do list and stay on top of your tasks, no matter where you are. With powerful features like custom lists, due dates, reminders, and task prioritization, you can easily manage even the busiest schedule.\r\n\r\nOur app is seamlessly integrated across devices, so you can access your tasks and lists from your phone, tablet, or computer. Plus, with real-time sync, any changes you make to your tasks or lists will be updated instantly on all of your devices.\r\n\r\nOur user-friendly interface makes it easy to create, edit, and organize your tasks with just a few clicks. You can create custom lists for work, home, or personal tasks, set due dates and reminders, and even prioritize your tasks by importance.\r\n\r\nIn addition to our powerful task management features, we also offer a range of customization options to make the app work for you. Choose from a range of themes, fonts, and layouts to create a personalized experience that suits your needs.\r\n\r\nWith our task management app, you can finally say goodbye to the stress and overwhelm of an endless to-do list. Stay organized, focused, and on top of your tasks with ease. Download our app today and start taking control of your schedule.",
//     "game_spotlight_image": "https://res.cloudinary.com/dubwbz83k/image/upload/v1/media/game/images/game_spotlight_images/img_001_bt7maj",
//     "game_image": "https://res.cloudinary.com/dubwbz83k/image/upload/v1/media/game/images/game_images/img_002_pega0l",
//     "game_video": "https://www.youtube.com/watch?v=RzCMmBvVTGw",
//     "game_price": "0.00",
//     "game_rating": "0.00",
//     "game_release_date": "2023-04-05",
//     "game_genre": "Simulation",
//     "game_publisher": "Playcenter Games",
//     "game_developer": "Playcenter Games",
//     "game_platform": "Android",
//     "game_language": "English",
//     "game_system_requirements": "Andriod 8 and above.",
//     "game_tags": "None",
//     "game_age_rating": "3+",
//     "game_link": "https://arshadbarves.itch.io/kitchen-krapper",
//     "game_status": "Coming Soon",
//     "game_created_date": "2023-03-27T13:20:08Z",
//     "game_updated_date": "2023-03-27T13:20:08Z"
// }

  gameId!: number;
  gameDetails: any = {};

  // Placeholder image URL
  placeholderImageUrl = '/assets/images/placeholder-image.jpg';

  
  isDataLoaded = false;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.gameId = 5; // Hardcoded for now
    if (this.gameDetails.game_spotlight_image == null || this.gameDetails.game_image == null) {
      this.gameDetails.game_spotlight_image = this.placeholderImageUrl;
      this.gameDetails.game_image = this.placeholderImageUrl;
    }
    const GAMEDETAILS_API_URL =
      'https://playcenter.azurewebsites.net/playcenter/game/';

    this.route.params.subscribe((params) => {
      this.gameId = params['id'];
    });

    this.http
      .get(GAMEDETAILS_API_URL + this.gameId + '/?format=json')
      .subscribe((data: any) => {
        this.gameDetails = data;
        this.isDataLoaded = true;
        console.log(this.gameDetails);
      });
  }

  // Get Spotlight Image
  getSpotlightImage() {
    console.log(this.gameDetails.game_spotlight_image);
    return this.gameDetails.game_spotlight_image;
  }
}
