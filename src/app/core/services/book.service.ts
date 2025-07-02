import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core'
import { Book } from '../models/book.model'
import { BOOKS } from '../../../assets/configs/books-data.config'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public books: Signal<Book[]> = computed(() => {
    return this._books()
  })
  private _books: WritableSignal<Book[]> = signal<Book[]>(BOOKS)

  public getBooksByTitleOrAuthor(searchTerm: string): void {
    this._books.update(() => [
      ...BOOKS.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    ])
  }

  public addBook(newBook: Book): void {
    BOOKS.push({ ...newBook, id: Math.floor(Math.random() * 1000) })
    this._books.update(() => [...BOOKS])
  }

  public updateBook(bookId: number, updatedBook: Book): void {
    this._books.update((books) => {
      const bookIndex = books.findIndex(book => book.id === bookId);
      if (bookIndex !== -1) {
        const updatedBooks = [...books];
        updatedBooks[bookIndex] = { ...updatedBook };
        return updatedBooks;
      }
      return books;
    });
  }

  public deleteBook(bookId: number): void {
    const bookIndex = BOOKS.findIndex((book) => book.id === bookId)
    if (bookIndex !== -1) {
      BOOKS.splice(bookIndex, 1)
    }
    this._books.update(() => [...this.books().filter((book) => book.id !== bookId)])
  }
}
