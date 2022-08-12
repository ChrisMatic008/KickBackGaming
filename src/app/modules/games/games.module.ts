import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayGamesComponent } from './display-games/display-games.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [DisplayGamesComponent ],
  imports: [CommonModule, HttpClientModule ],
  exports: [DisplayGamesComponent]
})
export class GamesModule { }
