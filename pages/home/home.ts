import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Languages } from '../../app/models/models';
import { languageList } from '../../app/data/language-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
allLanguages: Languages[];
  
  constructor() { }
  
  ngOnInit() {
    this.allLanguages = languageList;
  }

}
