import { Component, OnInit, Inject, ViewChild, ElementRef, viewChild, inject, Output, EventEmitter } from '@angular/core';
import { gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { DOCUMENT } from "@angular/common"


gsap.registerPlugin(ScrollTrigger);


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu', { static: true }) menu!: ElementRef<HTMLDivElement>;
  @ViewChild('menuSecond', { static: true }) menuSecond!: ElementRef<HTMLDivElement>;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor(@Inject(DOCUMENT) private document:Document) {

  }

  scrollToSection(section: string) {

    setTimeout(() => {
      const element = this.document.getElementById(section);
      if(element) {
        element.scrollIntoView({
          behavior:'smooth',
          block:'start'
        });
      }
    }, 300);
  }


  openSideMenu() {
    this.toggle.emit(true)
  }

  ngOnInit(): void {
    this.initialAnimations();
  }

  initScrollAnimation(): void {

  }

  initialAnimations(): void {
    gsap.from(this.menu.nativeElement.childNodes, {
      duration: 0.5,
      opacity:0,
      y: -20,
      stagger: 0.2,
      delay: 0.5
    })
    // gsap.from(this.menuSecond.nativeElement.childNodes, {
    //   duration: 0.5,
    //   opacity:0,
    //   y: -20,
    //   stagger: 0.2,
    //   delay: 0.8
    // })
  }
}
