import {Component, OnInit, ViewChild} from '@angular/core';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { MatTableDataSource } from '@angular/material';
import { timeout } from 'q';



const DATA = [
  
  {label: 'Projektmanagement', attainedDate: '6.6.2019 17:22:12', published: false, synchronized: true},
  {label: 'Zuverlässigkeit', attainedDate: '3.12.2018, 15:48:08', published: true, synchronized: true},
  {label: 'Gewissenhaftigkeit', attainedDate: '1.7.2018, 17:11:53', published: true, synchronized: false},
  {label: 'Kommunikationsfähigkeit', attainedDate: '1.1.2018, 00:00:01', published: true, synchronized: true},
  {label: 'Teamfähigkeit', attainedDate: '1.1.2018, 00:00:01', published: true, synchronized: true},
  {label: 'Disziplin', attainedDate: '21.11.2017, 14:23:33', published: false, synchronized: true},
  {label: 'Schlagfertigkeit', attainedDate: '2.9.2017, 07:15:20', published: false, synchronized: false},
  {label: 'Zuverlässig', attainedDate: '2.9.2017, 07:15:18', published: true, synchronized: false},
  {label: 'Lernbereitschaft', attainedDate: '2.9.2017, 07:15:15', published: true, synchronized: true},
]

@Component({
  selector: 'sync-competences',
  templateUrl: './sync-competences.component.html',
  styleUrls: ['./sync-competences.component.scss']
})
export class SyncCompetencesComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  displayedColumns = ['label', 'attainedDate', 'published', 'synchronized', 'actions'];


  constructor() {
    
  }

  

  ngOnInit() {

    this.dataSource.data = DATA;
   
    console.log("synch-competences");
  }

  setPublishedToUnpublished(entry: any) {
    entry.published = undefined;
    setTimeout(() => {
      entry.published = false;
    }, 2000);
  }

  setUnpublishedToPublished(entry: any) {
    entry.published = undefined;
    setTimeout(() => {
      entry.published = true;
    }, 2000);
  }

  setSynchronizedToUnsynchronized(entry: any) {
    entry.synchronized = undefined;
    setTimeout(() => {
      entry.synchronized = false;
    }, 2000);
  }

  setUnsynchronizedToSynchronized(entry: any) {
    entry.synchronized = undefined;
    setTimeout(() => {
      entry.synchronized = true;
    }, 2000);
  }

}
