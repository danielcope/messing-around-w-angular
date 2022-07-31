import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { RawrComponent } from '../rawr/rawr.component';
import { SecondComponent } from '../second/second.component';
import { PageComponent } from '../page/page.component';


const routes: Routes = [
  { path: 'rawr', component: RawrComponent},
  { path: 'second', component: SecondComponent},
  { path: 'second', component: PageComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
