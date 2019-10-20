import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Routes,
  RouterModule,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AboutComponent } from 'libs/ui/src/lib/about/about.component';

const routes: Routes = [
  { path: 'aboutus', component: AboutComponent },
  {
    path: 'moreabout',
    component: HomeComponent,
    resolve: {
      url: 'externalUrlRedirectResolver'
    },
    data: {
      externalUrl: 'http://google.com'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      }
    }
  ]
})
export class AppRoutingModule {}
