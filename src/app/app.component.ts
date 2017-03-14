import { Component } from '@angular/core';
@Component({
    selector: 'modal-demo',
	template: `
	
<div class="container">
  
<div class="container-fluid" >
	<h2>Hey Assignment 12.3</h2>
	<div class="row">
	<div class="col-sm-4"><b>NAME</b></div><div class="col-sm-4"><b>HOBBY'S</b></div><br>
	<div *ngFor="let fr of (friends|filterName) ">
	
	<div class="col-sm-4">{{fr.name}}</div><div class="col-sm-8">{{fr.hobby}}</div>
	</div>
	</div>
</div>
</div>
`,
})

export class AppComponent{
	
	vars: boolean = false;
	list=[
	{ name: "numbers", description: "123456789101234567891012345678910" },
	{ name: "class", description: "class is a collection of objects..." },
	{ name: "method", description: "method contains functionality of a class" },
	{ name: "javascript", description: "javascript is widely used for website" },

	];

friends: any = [
{ name: "Avnesh", hobby: "Coding"},
{ name: "Kaushik", hobby: "Coding" },
{ name: "Archana", hobby: "Cooking" },
{ name: "Piyush", hobby: "Singing" },
{ name: "Archit", hobby: "sports" },
{ name: "Hema", hobby: "gossiping" }
]; 

	constructor()
	{
		
	}
}
