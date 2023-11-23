import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'control-flow2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow2.component.html'
})
export class ControlFlow2Component {


  public open : boolean = true
  public isConnect : boolean = false
  public listPiments : any[] = [
    { id : 1, name : "Poivron", scoville : "0 - 100", categ : "light" },
    { id : 2, name : "Anaheim", scoville : "500 - 1000", categ : "light" },
    { id : 3, name : "Ancho", scoville : "1000 - 1500", categ : "medium" },
    { id : 4, name : "Chimayo", scoville : "2500 - 5000", categ : "medium" },
    { id : 5, name : "Fatali", scoville : "125 000 - 325 000", categ : "hot" },
    { id : 6, name : "Scorpion", scoville : "1 250 000", categ : "hot" },
    { id : 7, name : "Regret", scoville : "9 000 000", categ : "extreme" },
    { id : 8, name : "capsaïcine pur", scoville : "10 000 000 - 14 000 000", categ : "elemental" },
  ]
  public accessLevel : string = "admin"

  openCloseDesc(){
    this.open = !this.open
  }

  connect(){
    this.isConnect = !this.isConnect
  }

}
