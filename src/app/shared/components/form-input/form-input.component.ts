import { Component, Input, Optional, Self } from '@angular/core'
import { NgControl } from '@angular/forms'
import { SharedModule } from '../../shared.module'

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss',
  imports: [SharedModule],
  standalone: true
})
export class FormInputComponent {
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public showIcon = false;
  @Input() public type: string = 'text';
  @Input() public required: boolean = false;
  @Input() public width: string = '360px';
  public searchTerm: string = '';

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  public onTouch: () => void = () => {};
  private _onChange: (value: string) => void = () => {};

  public writeValue(searchTerm: string): void {
    this.searchTerm = searchTerm;
  }

  public registerOnChange(fn: (value: string) => void): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public onInputChange(value: string): void {
    this.searchTerm = value;
    this._onChange(value);
  }
}
