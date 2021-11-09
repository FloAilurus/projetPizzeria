import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PizzaDisplayComponent} from "./components/pizza-display/pizza-display.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "pizza-display", component: PizzaDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
