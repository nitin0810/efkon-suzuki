import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QuickSearchPage } from './quick-search.page';

const routes: Routes = [
  {
    path: '',
    component: QuickSearchPage
  }
];

@NgModule({
  imports: [
    // CommonModule,
    // FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuickSearchPage]
})
export class QuickSearchPageModule {}
