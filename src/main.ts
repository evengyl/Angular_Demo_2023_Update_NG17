import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from "./app/app-routing"


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) //registering routes
  ]
}).catch((err) => console.error(err));
