import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SharedModule } from '../../../../shared/shared.module'
import { Book } from '../../../../core/models/book.model'

@Component({
  selector: 'app-detail-book-modal',
  imports: [SharedModule],
  standalone: true,
  templateUrl: './detail-book-modal.component.html',
  styleUrl: './detail-book-modal.component.scss'
})
export class DetailBookModalComponent {
  public imageSrc: string | ArrayBuffer | null = '/assets/images/background-library.png';
  constructor(@Inject(MAT_DIALOG_DATA) public data: Book) {
    if (data.image) {
      const reader = new FileReader();

      reader.onload = () => {
        this.imageSrc = reader.result;
      };

      reader.readAsDataURL(data.image);
    }
  }
}
