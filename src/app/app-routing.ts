import { ListNews1Component } from './demos/listNews1/listNews1.component';
import { ControlFlow2Component } from './demos/control-flow2/control-flow2.component';
import { Deferring3Component } from './demos/deferring3/deferring3.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path : "", component : ListNews1Component},
  { path : "listNews1", component : ListNews1Component},
  { path : "controlflow2", component : ControlFlow2Component},
  { path : "deferring3", component : Deferring3Component},
]
