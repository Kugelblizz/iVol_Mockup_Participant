import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {
  MatButtonModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatProgressBarModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {FuseAchievementsComponent} from './achievements.component';
import {FuseConfirmDialogModule, FuseWidgetModule} from '@fuse/components';
import {CollaborationsComponent} from './collaborations/collaborations.component';
import {ContributionsComponent} from './contributions/contributions.component';
import {EncouragementsComponent} from './encouragements/encouragements.component';
import {OpportunitiesComponent} from './opportunities/opportunities.component';
// import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

const routes = [
  {path: 'achievements', component: FuseAchievementsComponent}
];

@NgModule({
  declarations: [
    FuseAchievementsComponent,
    CollaborationsComponent,
    ContributionsComponent,
    EncouragementsComponent,
    OpportunitiesComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,

    FuseSharedModule,
    FuseConfirmDialogModule,
    FuseWidgetModule,

    // NgbModalModule
  ]
})

export class FuseAchievementsModule {
}
