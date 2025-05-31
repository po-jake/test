import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrl: './other.page.scss',
  imports: [RouterOutlet],
})
export default class OtherPage {
  title = 'other'
}
