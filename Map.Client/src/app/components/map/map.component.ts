import { Component, OnInit } from "@angular/core";


@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
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
