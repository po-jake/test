import { Component, inject, Signal } from '@angular/core'
import { FormInputComponent } from '../../../shared/components/form-input/form-input.component'
import { BookCardComponent } from '../../../shared/components/book-card/book-card.component'
import { SharedModule } from '../../../shared/shared.module'
import { NoDataComponent } from '../../../shared/components/no-data/no-data.component'
import { BookService } from '../../../core/services/book.service'
import { Book } from '../../../core/models/book.model'
import { MatDialog } from '@angular/material/dialog'
import { CreateEditBookModalComponent } from '../components/create-edit-book-modal/create-edit-book-modal.component'


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss',
  imports: [FormInputComponent, BookCardComponent, SharedModule, NoDataComponent],
  standalone: true,
})
export class LibraryComponent {
  public searchTerm: string = '';
  public bookService = inject(BookService);
  public books: Signal<Book[]> = this.bookService.books;
  readonly dialog = inject(MatDialog);

  public onSearchChange(): void {
    this.bookService.getBooksByTitleOrAuthor(this.searchTerm);
  }

  public addNewBook(): void {
    this.dialog.open(CreateEditBookModalComponent);
  }
}
