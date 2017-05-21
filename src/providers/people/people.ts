import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleProvider {
	public people = [
		{
			"gender":"female",
			"name": {
					"title":"mrs",
					"first":"maëlia",
					"last":"marchand"
			},
			"location": {
				"street":"3658 rue du stade",
				"city":"rueil-malmaison",
				"state":"nord",
				"postcode":98947
			},
			"email":"maëlia.marchand@example.com",
			"login": {
				"username":"crazypeacock577",
				"password":"jingle",
				"salt":"kdWVCCJH",
				"md5":"e49e93e875106a531ec2db40dec40974",
				"sha1":"4d9901c351c5fcbba7da5f49e1de3f64e4490103",
				"sha256":"31cf10b059b2893a8126c2f1e528ef5cd11b71c608be2bba32309e43b9c0fb05"
			},
			"dob":"1953-12-21 07:27:47",
			"registered":"2005-11-07 06:58:02",
			"phone":"02-38-29-63-01",
			"cell":"06-77-09-21-93",
			"id": {
				"name":"INSEE",
				"value":"2531106672760 10"
			},
			"picture": {
				"large":"https://randomuser.me/api/portraits/women/77.jpg",
				"medium":"https://randomuser.me/api/portraits/med/women/77.jpg",
				"thumbnail":"https://randomuser.me/api/portraits/thumb/women/77.jpg"
					}
		},
		{
			"gender":"male",
			"name": {
				"title":"mr",
				"first":"alexandre",
				"last":"claire"
				},
			"location": {
				"street":"8644 alfred st",
				"city":"trout lake",
				"state":"new brunswick",
				"postcode":20978
			},
			"email":"alexandre.claire@example.com",
			"login": {
				"username":"silverrabbit590",
				"password":"gore",
				"salt":"7Uzk7Nbv",
				"md5":"6b013b6f69fd6e9b6538b068279c4e56",
				"sha1":"4434abc6b3f7d8590133a51e05cacd7395b0576d",
				"sha256":"941384a1ced73da58de7f8b0756dafae29e801a5161362b99536aa44f8da556e"
			},
			"dob":"1953-11-22 18:21:10",
			"registered":"2012-12-09 22:04:22",
			"phone":"627-126-3449",
			"cell":"309-601-8051",
			"id": {
				"name":"",
				"value":null
			},
			"picture": {
				"large":"https://randomuser.me/api/portraits/men/84.jpg",
				"medium":"https://randomuser.me/api/portraits/med/men/84.jpg",
				"thumbnail":"https://randomuser.me/api/portraits/thumb/men/84.jpg" 
			}
		},
		{
			"gender":"male",
			"name":{
				"title":"mr",
				"first":"jules",
				"last":"meyer"
			},
			"location":{
				"street":"2868 rue des cuirassiers",
				"city":"villeurbanne",
				"state":"haut-rhin",
				"postcode":26134
			},
			"email":"jules.meyer@example.com",
			"login":{
				"username":"whitemeercat954",
				"password":"2626",
				"salt":"0d6UTQ2X",
				"md5":"bf242727158a252d47bba3266bbf5c8e",
				"sha1":"e0e939002702122e15305eee6baf84ce09404323",
				"sha256":"f87d449ed487643cb078bf904092d971cefa3dbc5f498934948495158a05b97f"
			},
			"dob":"1959-07-28 16:24:54",
			"registered":"2016-06-29 15:51:51",
			"phone":"05-76-76-58-88",
			"cell":"06-21-77-99-92",
			"id":{
				"name":"INSEE",
				"value":"159650445363 26"
			},
			"picture":{
				"large":"https://randomuser.me/api/portraits/men/17.jpg",
				"medium":"https://randomuser.me/api/portraits/med/men/17.jpg",
				"thumbnail":"https://randomuser.me/api/portraits/thumb/men/17.jpg"
			}
		},
	]
  constructor(public http: Http) {
    console.log('Hello PeopleProvider Provider');
  }
  public getPeople() {
  	return this.http.get('https://randomuser.me/api/?results=3')
  						.map(results => results.json())
  }
}
