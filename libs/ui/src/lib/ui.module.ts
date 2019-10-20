import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEngineComponent } from './search-engine/search-engine.component';
import {
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule
  ],
  declarations: [SearchEngineComponent, AboutComponent],
  exports: [SearchEngineComponent, AboutComponent]
})
export class UiModule {}
