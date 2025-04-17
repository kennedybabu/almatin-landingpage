import { Component, OnInit, Inject, ViewChild, ElementRef, viewChild, inject } from '@angular/core';
import { gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DOCUMENT } from "@angular/common"


gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  @ViewChild('imageFirst', { static: true }) imageFirst!: ElementRef<HTMLDivElement>;
  @ViewChild('imageSecond', { static: true }) imageSecond!: ElementRef<HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document:Document) {



  }

  ngOnInit(): void {
    this.initScrollAnimations();
  }

  initScrollAnimations():void {
    gsap.to(this.imageFirst.nativeElement, {
      scrollTrigger:{
        trigger: this.imageFirst.nativeElement,
        scrub: true,
        start: '110% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale: 1.2,
      height: 250,
    })

    gsap.to(this.imageSecond.nativeElement, {
      scrollTrigger:{
        trigger: this.imageFirst.nativeElement,
        scrub: true,
        start: '80% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.1,
      scale: 1.2,
      height: 380,
    })

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
    
  }

  initialAnimations():void {
    gsap.from(this.imageFirst.nativeElement.childNodes, {
      duration: 0.7,
      opacity:0,
      y: -30,
      delay: 0.5
    })
    gsap.from(this.imageSecond.nativeElement.childNodes, {
      duration: 0.7,
      opacity:0,
      y: -30,
      delay: 0.6
    })
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
    gsap.from(this.document.querySelector('.btn'), {
      duration: .7,
      opacity:0,
      y:-30,
      delay: .8
    })
  }
}
