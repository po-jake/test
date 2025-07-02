import { Component, Inject } from '@angular/core'
import { SharedModule } from '../../../../shared/shared.module'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-delete-book-modal',
  imports: [SharedModule],
  templateUrl: './delete-book-modal.component.html',
  styleUrl: './delete-book-modal.component.scss',
  standalone: true
})
export class DeleteBookModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }
}
