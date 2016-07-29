import { Component, OnInit } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CounterComponent } from './components/counter/counter.component';

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
	directives: [REACTIVE_FORM_DIRECTIVES, CounterComponent]
})
export class AppComponent implements OnInit {
	private formBuilder: FormBuilder;

	registerForm: FormGroup;
	// data: any;

	constructor(formBuilder: FormBuilder) {
		this.formBuilder = formBuilder;
	}

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			firstname: ['', Validators.required],
			lastname: ['', Validators.required],
			counter: 5
		});

		// this.registerForm.valueChanges.subscribe(x => this.data = reg);
	}

	send() {
		console.log(this.registerForm.value);
	}
}
