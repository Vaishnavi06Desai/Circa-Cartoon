import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timescroll',
  templateUrl: './timescroll.component.html',
  styleUrls: ['./timescroll.component.scss']
})
export class TimescrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    window.addEventListener("scroll", this.moveCamera);
    this.setSceneHeight();
    // console.log(getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed"))
  }

  moveCamera() {
    document.documentElement.style.setProperty("--cameraZ", window.pageYOffset.toString());
  }

  setSceneHeight() {
    const numberOfItems = 5; // Or number of items you have in `.scene3D`
    const itemZ = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--itemZ")
    );
    const scenePerspective = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--scenePerspective"
      )
    );
    const cameraSpeed = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--cameraSpeed")
    );

    const height =
      window.innerHeight +
      scenePerspective * cameraSpeed +
      itemZ * cameraSpeed * numberOfItems;

    // Update --viewportHeight value
    document.documentElement.style.setProperty("--viewportHeight", height.toString());
  }

}
