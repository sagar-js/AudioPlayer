import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatListModule, MatSliderModule, MatIconModule, MatToolbarModule, MatCardModule, MatGridListModule } from '@angular/material';
const modules = [
  CommonModule, 
  MatButtonModule, 
  MatListModule, 
  MatSliderModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatCardModule,
  MatGridListModule,
];

@NgModule({
  declarations: [
  ],
  imports:modules,
  exports:modules
})
export class MaterialModule { }
