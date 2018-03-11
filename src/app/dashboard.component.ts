import { Component } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	template: `
		<h1 [textContent]="loadState"></h1>
		<input type="text" [(ngModel)]="loadState">
		<button (click)="onUserClick()">Click Me!</button>
	`
})
export class DashboardComponent {
	
	loadState="loading";

	onUserClick(event){
		this.loadState='Finished';
	}

	onUserInput(event){
		this.loadState = event.target.value;
	}
}