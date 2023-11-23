import { CommonModule } from '@angular/common';
import { Component } from '@angular/core'

@Component({
  selector: 'app-list-news1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listNews1.component.html'
})
export class ListNews1Component{

  varStandalone : string = `
  @Component({
    standalone: true,
    selector: 'photo-gallery',
    imports: [ImageGridComponent],
    template: '<image-grid [images]="imageList"></image-grid>',
  })
  export class PhotoGalleryComponent {
    // component logic
  }`

  lazyCompo : string = `
  export const ROUTES: Route[] = [
    {path: 'admin', loadComponent: () => import('./admin/panel.component').then(mod => mod.AdminPanelComponent)},
    // ...
  ];`

  mainChange : string = `
    bootstrapApplication(AppComponent, {
      providers: [
        provideRouter(routes) //registering routes
      ]
    }).catch((err) => console.error(err));
  `
}
