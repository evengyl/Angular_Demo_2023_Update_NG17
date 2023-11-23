import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListitemComponent } from "./listitem/listitem.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-deferring3',
    standalone: true,
    templateUrl: './deferring3.component.html',
    imports: [CommonModule, ListitemComponent, HttpClientModule]
})
export class Deferring3Component {

    listItem : any[] = []


    constructor(private httpC : HttpClient)
    {
        //https://angular.io/guide/defer
        setTimeout(() => {
        this.httpC.get('https://jsonplaceholder.typicode.com/todos/')
        .subscribe((datas : any) => {
            
                this.listItem = datas
            })
        }, 1500)
    }


}
