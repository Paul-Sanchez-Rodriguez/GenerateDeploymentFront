import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutBody } from "./layout/body/layout-body/layout-body";
import { HttpClientModule } from '@angular/common/http';
import { Slider } from "./layout/slider/slider";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontDeployment');
}
