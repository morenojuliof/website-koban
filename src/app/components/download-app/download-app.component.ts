import { Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { bounceAnimation, bounceInUpOnEnterAnimation, bounceOutDownOnLeaveAnimation, collapseAnimation, fadeInUpOnEnterAnimation, flashAnimation, rubberBandAnimation } from '../../../../lib';

@Component({
  selector: 'app-download-app',
  templateUrl: './download-app.component.html',
  styleUrls: ['./download-app.component.css'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1' }),
    bounceAnimation(),
    flashAnimation(),
    rubberBandAnimation(),
    collapseAnimation(),    
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 5000, delay: 200, translate: '30px' }),
    bounceOutDownOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 200, translate: '40px' })
  ]
})
export class DownloadAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}
