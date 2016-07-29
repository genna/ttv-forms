import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	moduleId: module.id,
	selector: 'ttv-counter',
	templateUrl: 'counter.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CounterComponent),
			multi: true
		}
	]
})
export class CounterComponent implements ControlValueAccessor {
	counterValue = 0;

	private propagateChange: Function;
	private propagateTouch: Function;

	constructor() {
	}

	writeValue(value: any): void {
		this.counterValue = value;
	}

	registerOnChange(fn: any): void {
		this.propagateChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.propagateTouch = fn;
	}

	increment() {
		this.counterValue++;
		this.propagateChange(this.counterValue);
	}

	decrement() {
		this.counterValue--;
		this.propagateChange(this.counterValue);
	}
}