import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeopleProvider } from '../../providers/people/people'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	constructor(public navCtrl: NavController, public service: PeopleProvider) {
		this.service.getPeople()
			.subscribe(data => this.people = data.results)
  }

	public people = []
	
	public shouldReorder = false
  
  toggleReorder() {
  	this.shouldReorder = !this.shouldReorder
  }

}
