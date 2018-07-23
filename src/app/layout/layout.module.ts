import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './layout.component';
import { OffsidebarComponent } from './offsidebar/offsidebar.component';
import { PostComponent } from './post/post.component';
import { StoriesComponent } from './stories/stories.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent,LayoutComponent, OffsidebarComponent, PostComponent, StoriesComponent, GamesComponent],
  exports:[
    LayoutComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
