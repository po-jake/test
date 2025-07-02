import { Component, inject, Input } from '@angular/core'
import { Book } from '../../../core/models/book.model'
import { RandomLightColorPipe } from '../../pipes/random-light-color.pipe'
import { SharedModule } from '../../shared.module'
import { BookService } from '../../../core/services/book.service'
import { animations } from '../../../core/constants/animations.constants'
import { MatDialog } from '@angular/material/dialog'
import {
  DeleteBookModalComponent,
} from '../../../feature/library/components/delete-book-modal/delete-book-modal.component'
import {
  CreateEditBookModalComponent
} from '../../../feature/library/components/create-edit-book-modal/create-edit-book-modal.component'
import {
  DetailBookModalComponent
} from '../../../feature/library/components/detail-book-modal/detail-book-modal.component'
import { take } from 'rxjs'

@Component({
  selector: 'app-book-card',
  imports: [
    RandomLightColorPipe,
    SharedModule
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
  standalone: true,
  animations: [animations.fadeInOut],
})
export class BookCardComponent {
  @Input() public book: Book;
  @Input() public index: number;

  readonly dialog = inject(MatDialog);

  private bookService = inject(BookService);

  public deleteBook(): void {
    this.dialog.open(DeleteBookModalComponent, {
      data: this.book.title,
    }).afterClosed().pipe(take(1)).subscribe({
      next: (res) => {
        if (res) {
          this.bookService.deleteBook(this.book.id);
        }
      }
    })
  }

  public editBook(): void {
    this.dialog.open(CreateEditBookModalComponent, {
      data: this.book
    }).afterClosed().pipe(take(1)).subscribe()
  }

  public openDetailBook(): void {
    this.dialog.open(DetailBookModalComponent, { data: this.book });
  }
}
