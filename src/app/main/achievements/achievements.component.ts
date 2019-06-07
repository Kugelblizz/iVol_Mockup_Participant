import {Component, OnDestroy, OnInit} from '@angular/core';

import {Subscription} from 'rxjs';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'fuse-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
  animations: fuseAnimations

})
export class FuseAchievementsComponent implements OnInit, OnDestroy {
  public projects: Array<any>;

  constructor() {
  }

  ngOnInit() {
    this.loadProjects();
  }

  ngOnDestroy() {
    // this.marketplaceChangeSubscription.unsubscribe();
  }


  private loadProjects() {
    this.projects = [];
    
  }
}

