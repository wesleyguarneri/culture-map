import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
import { ComponentLibraryModule } from '@arcgis/map-components-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapComponent, ComponentLibraryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'culture-map';

  arcgisViewReadyChange(event: any) {
    console.log("MapView ready", event);
  }

  ngOnInit(): void {
    defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });
  }
}
