import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrumbowygComponent } from './trumbowyg.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrumbowygComponent],
  exports: [TrumbowygComponent]
})
export class TrumbowygModule { }
