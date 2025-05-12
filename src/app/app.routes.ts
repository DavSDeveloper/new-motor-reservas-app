import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingSearchComponent } from './pages/booking-search/booking-search.component';

export const routes: Routes = [{ path: '', component: BookingSearchComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
