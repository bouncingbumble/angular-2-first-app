import { Component } from '@angular/core';

@Component({
	selector: 'app-user',
	template: `
		<input type="text" [(ngModel)]="name">
		<p>Hello {{name}}</p>
		<p>Im the user compontnet</p>
	`
})
export class UserComponent {
	name = 'yourName';

	onUserInput(event){
		this.name = event.target.value;
	}
}