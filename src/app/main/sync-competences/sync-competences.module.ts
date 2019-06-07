import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {SyncCompetencesComponent} from './sync-competences.component';
import { MatTableModule, MatIconModule, MatButtonModule, MatCommonModule, MatProgressSpinnerModule } from '@angular/material';



const routes = [
  {
      path     : 'synccompetences',
      component: SyncCompetencesComponent
  }
];

@NgModule({
  declarations: [
    SyncCompetencesComponent,
  ],
  imports: [
    RouterModule.forChild(routes),

    MatCommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,


    FuseSharedModule
  ],
  exports: [
    SyncCompetencesComponent
  ]

})

export class SyncCompetencesModule {
}
