/* 
 * tesla-car.component.ts
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tesla-car',
  changeDetection: ChangeDetectionStrategy.OnPush, // kaže angularu da sve što dolazi kroz @Input() je imutabilno (ne promijenjivo)
  template: `
    <div class="tesla-car">
      <div class="tesla-wheels">
        <div class="tesla-wheel tesla-wheel--front tesla-wheel--{{ wheelsize }}"></div>
        <div class="tesla-wheel tesla-wheel--rear tesla-wheel--{{ wheelsize }}"></div>
      </div>
    </div>
  `,
  styleUrls: ['./tesla-car.component.scss']
})
export class TeslaCarComponent {
  @Input() wheelsize: number;
  constructor() {}
}