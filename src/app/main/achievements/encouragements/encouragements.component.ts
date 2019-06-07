import { Component, OnInit, AfterViewInit } from '@angular/core';

import * as Chart from 'chart.js';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'fuse-encouragements',
  templateUrl: './encouragements.component.html',
  styleUrls: ['./encouragements.component.scss'],
  animations: fuseAnimations

})
export class EncouragementsComponent implements OnInit, AfterViewInit {
  badgeGroups: any[] = [];

  canvas: any;
  ctx: any;

  competencies = {
    'competencies': [
      { 'name': 'Paramedic', 'marketplace': 'Austrian Red Cross', 'date': '(10.08.2018)', 'task': 'Training Course: Paramedic' },
      { 'name': 'Social Skills 1', 'marketplace': 'Middle School Linz Dornach', 'date': '(18.12.2017)', 'task': 'Advent bazaar Second class' }
    ]
  };

  constructor() { }

  ngOnInit() {
    const badge1 = {label: 'Workaholic Rookie', icon: 'assets/badges/badge 1.svg', marketplace: 'Marketplace 1', description: 'Finish 3 tasks in one month'};
    const badge2 = {label: 'Everybody\'s Darling', icon: 'assets/badges/badge 2.svg', marketplace: 'Marketplace 1', description:  'Receive 10 likes from individual people'};
    const badge3 = {label: 'Multitasking Master', icon: 'assets/badges/badge 3.svg', marketplace: 'Marketplace 2', description: 'Be involved in 6 projects at a time'};

    const bg1 = {label: 'Personal Badges', number: 66, badges: [badge1, badge3]};
    const bg2 = {label: 'Social Badges', number: 33, badges: [badge2]}

    this.badgeGroups.push(bg1);
    this.badgeGroups.push(bg2);

  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('competenceRadar');
    this.ctx = this.canvas.getContext('2d');
    const myChart = new Chart(this.ctx, {
      type: 'radar',
      data: {
        labels: ['Professional skills', 'Methodical expertise', 'Social skills', 'Self competences'],
        datasets: [{
          label: 'You',
          backgroundColor: 'rgba(200,0,0,0.2)',
          data: [0.5, 0.5, 0.5, 0.5]
        }]
      },
      options: {}
    });
  }

}
