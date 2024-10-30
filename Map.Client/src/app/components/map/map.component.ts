import { Component, OnInit } from "@angular/core";
import { ComponentLibraryModule } from "@arcgis/map-components-angular";


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [ComponentLibraryModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {

  arcgisViewReadyChange(event: any) {
    console.log("MapView ready", event);
  }

  ngOnInit(): void {
  }
}
