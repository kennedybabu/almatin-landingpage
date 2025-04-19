import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DOCUMENT } from "@angular/common"


gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  @ViewChild('secondSection', { static: true }) secondSection!: ElementRef<HTMLDivElement>;
  opened = false;

  constructor(@Inject(DOCUMENT) private document:Document) {

  }

  toggleSideBar(event: Event) {
    this.opened = !this.opened
  }

  ngOnInit(): void {
    this.initialAnimations();
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {

    gsap.to(this.document.querySelector('.heading-1'), {
      ScrollTrigger: {
        trigger: this.document.querySelector('.heading-1'),
        scrub: true,
        start: '150% center'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      color: '#2a2a2a',
      duration: 1.5
    })
    gsap.to(this.document.querySelector('.paragraph'), {
      ScrollTrigger: {
        trigger: this.document.querySelector('.paragraph'),
        scrub: true, 
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      color: '#2a2a2a',
      duration: 1.5
    })
    gsap.to(this.document.querySelector('.btn'), {
      ScrollTrigger: {
        trigger: this.document.querySelector('.btn'),
        scrub: true, 
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      opacity: 1,
      duration: 1.5
    })
    gsap.to(this.document.querySelector('#buy'), {
      ScrollTrigger: {
        trigger: this.document.querySelector('#buy'),
        scrub: true, 
        toggleClass: 'active',
        start: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      y: 40,
      duration: 1.5,
      opacity: 1,
    })
    gsap.to(this.document.querySelector('#about'), {
      ScrollTrigger: {
        trigger: this.document.querySelector('#about'),
        scrub: true, 
        start: 'top center',
        toggleClass:'active'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      y: 40,
      duration: 1.5,
      opacity: 1
    })
    gsap.to(this.document.querySelector('.box'), {
      ScrollTrigger: {
        trigger: this.document.querySelector('.box'),
        scrub: true, 
        start: '-10% center',
        toggleClass:'active'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      width: 0,
      duration: 1.5,
      opacity: 0
    })
    gsap.to(this.document.querySelector('.info-1__visual img'), {
      ScrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual img'),
        scrub: true, 
        start: '-60% bottom',
        toggleClass:'active'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      height: 500,
      duration: 1.5,
      opacity: 1,
      scale: 1.3
    })
    gsap.to(this.document.querySelector('.quote'), {
      ScrollTrigger: {
        trigger: this.document.querySelector('.quote'),
        scrub: true, 
        start: '-60% bottom',
        toggleClass:'active'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      opacity: 1,
    })
    gsap.to(this.document.querySelector('.info-1__visual .heading'), {
      ScrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual .heading'),
        scrub: true, 
        start: '-60% bottom',
        toggleClass:'active'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      color: '#2a2a2a'
    })
    gsap.to(this.document.querySelector('.info-1__visual .btn--learning'), {
      ScrollTrigger: {
        trigger: this.document.querySelector('.info-1__visual .btn--learning'),
        scrub: true, 
        start: '-60% bottom',
        toggleClass:'active'
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      color: '#2a2a2a',
      y: 40
    })

  }

  initialAnimations(): void { 

    gsap.from(this.document.querySelector('.heading-1'), {
      duration: .7,
      opacity:0,
      y:-30,
      delay: .6
    })
    gsap.from(this.document.querySelector('.paragraph'), {
      duration: .7,
      opacity:0,
      y:-30,
      delay: .6
    })
    gsap.from(this.document.querySelector('#buy'), {
      duration: .7,
      opacity:0,
      y:-30,
      delay: .6
    })
    gsap.from(this.document.querySelector('.btn'), {
      duration: .7,
      opacity:0,
      y:-30,
      delay: .8
    })
  }  
}
