import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {FirstComponent} from "../first/first.component";
import {SecondComponent} from "../second/second.component";
import {NotFoundComponent} from "../not-found/not-found.component";

const routes = [
  {path: 'first', component: FirstComponent},
  {path: 'second', component: SecondComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  declarations: []
})
export class OurApplicationRoutingModuleModule {
}
