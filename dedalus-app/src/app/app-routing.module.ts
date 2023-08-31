import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientDetailComponent } from './pages/page-client-detail/page-client-detail.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';

const routes: Routes = [
	{ path: '', component: PageHomeComponent },
	{ path: 'clientDetail/:id', component: PageClientDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
