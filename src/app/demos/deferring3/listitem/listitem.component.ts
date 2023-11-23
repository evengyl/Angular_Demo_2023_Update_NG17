import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listitem.component.html'
})
export class ListitemComponent {

  
  @Input() item : any
}
