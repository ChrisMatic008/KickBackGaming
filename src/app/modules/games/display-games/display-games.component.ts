import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-display-games',
  templateUrl: './display-games.component.html' ,
  styleUrls: ['./display-games.component.css']
})
export class DisplayGamesComponent implements OnInit {
  public games: Game[] | undefined;
  private gamesRoute = 'http://localhost:3000/games';

  constructor(private http: HttpClient) { }

  getGames() {
    this.http.get<Game[]>(this.gamesRoute).subscribe(games => {
      this.games = games;
      console.log('Games', this.games);
    });
  }
  ngOnInit(): void {
    this.getGames();
  }

}
