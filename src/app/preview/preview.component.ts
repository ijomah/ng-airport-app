import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  template: `
    <p>
      preview works!
    </p>
  `,
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
