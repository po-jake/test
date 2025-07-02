import { Component, inject, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'
import { SharedModule } from '../../../../shared/shared.module'
import { FormInputComponent } from '../../../../shared/components/form-input/form-input.component'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Book } from '../../../../core/models/book.model'
import { BookService } from '../../../../core/services/book.service'
import { ImageCropperComponent } from 'ngx-image-cropper'
import { NgOptimizedImage } from '@angular/common'
import { NgxDropzoneModule } from 'ngx-dropzone'

@Component({
  selector: 'app-create-edit-book-modal',
  imports: [SharedModule, FormInputComponent, ImageCropperComponent, NgOptimizedImage, NgxDropzoneModule],
  templateUrl: './create-edit-book-modal.component.html',
  styleUrl: './create-edit-book-modal.component.scss',
  standalone: true
})
export class CreateEditBookModalComponent {
  public form: FormGroup = new FormGroup({
    id: new FormControl(''),
    image: new FormControl(''),
    author: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });
  public imageSrc: string | ArrayBuffer | null = null;

  private bookService = inject(BookService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Book | undefined) {
    if (this.data) {
      this.form.patchValue(this.data);
      if (this.data.image) {
        this.applyPhoto(this.data.image);
      }
    }
  }

  public onSelect(event: any): void {
    const file = event.addedFiles[0];
    if (file) {
      this.form.controls['image'].setValue(file);
      this.applyPhoto(file);
    }
  }

  public removeFile(): void {
    this.imageSrc = null;
    this.form.controls['image'].reset();
  }

  public confirm(): void {
    const book = this.form.value;
    this.data ? this.editBook(book) : this.addBook(book);
  }

  private editBook(book: Book): void {
    this.bookService.updateBook(book.id, book);
  }

  private addBook(book: Book): void {
    this.bookService.addBook(book);
  }

  private applyPhoto(file: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      this.imageSrc = reader.result;
    };

    reader.readAsDataURL(file);
  }
}
