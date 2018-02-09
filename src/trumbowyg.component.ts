import 'trumbowyg';
declare var trumbowyg: any;
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { setTimeout } from 'timers';

@Component({
  selector: 'ng-trumbowyg',
  templateUrl: './trumbowyg.component.html',
  styleUrls: ['./trumbowyg.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TrumbowygComponent), 
    multi: true
  }]
})
export class TrumbowygComponent implements AfterViewInit, ControlValueAccessor {
  private _disabled = false;
  private _placeholder = '';
  private _value = '';

  @ViewChild('trumbowyg') trumbowyg: ElementRef;
  @Input() set disabled(disabled: boolean) {
    if (disabled != null) {
      this._disabled = disabled;
    }
  }
  get disabled(): boolean {
    return this._disabled;
  }

  @Input() set placeholder(placeholder: string) {
    if (placeholder != null) {
      this._placeholder = placeholder;
    }
  }
  get placeholder(): string {
    return this._placeholder;
  }

  set value(value: string) {
    if (value != null) {
      this._value = value;
    }
  }

  get value(): string {
    return this._value;
  }

  constructor() { }
  ngAfterViewInit(): void {
    $(this.trumbowyg.nativeElement).trumbowyg({
      disabled: this.disabled,
      svgPath: 'trumbowyg/icons.svg'
    });
    this.addCallbacks();
  }

  private touched = () => { };
  private changed: (value: string) => void = () => { };

  writeValue(value: string) {
    setTimeout(() => {
      this.value = value;
      $(this.trumbowyg.nativeElement).trumbowyg('html', value);
    }, 0);
  }

  private addCallbacks() {
    $(this.trumbowyg.nativeElement).trumbowyg()
    .on('tbwblur', this.touched)
    .on('tbwchange', () => {
      const value = $(this.trumbowyg.nativeElement).trumbowyg('html');
      this.changed(value);
    });
}

  registerOnChange(fn: any) {
    this.changed = fn;
  }

  registerOnTouched(fn: any) {
    this.touched = fn;
  }
}
