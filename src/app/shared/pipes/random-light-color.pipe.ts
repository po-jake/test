import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomLightColor',
  standalone: true
})
export class RandomLightColorPipe implements PipeTransform {
  public transform(value: string): string {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 70 + Math.random() * 30;
    const lightness = 75 + Math.random() * 15;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
}
