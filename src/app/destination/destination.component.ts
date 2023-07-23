import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.scss'],
})
export class DestinationComponent implements OnInit {
  moon = 'MOON';
  moonlight = 'MOON';
  mars = 'MARS';
  europa = 'EUROPA';
  titan = 'TITAN';

  changeTxt() {
    this.moon = this.mars;
  }
  changeTxt2() {
    this.moon = this.europa;
  }
  changeTxt3() {
    this.moon = this.titan;
  }
  changeTxt4() {
    this.moon = this.moonlight;
  }

  ///paragraphs

  paragraph1 =
    'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
  para =
    'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
  paragraph2 =
    'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
  paragraph3 =
    'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
  paragraph4 =
    'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';

  change() {
    this.paragraph1 = this.paragraph2;
  }
  change2() {
    this.paragraph1 = this.para;
  }
  change3() {
    this.paragraph1 = this.paragraph3;
  }
  change4() {
    this.paragraph1 = this.paragraph4;
  }

  moonImg = '/assets/images/image-moon.png';
  moonImg1 = '/assets/images/image-moon.png';
  marsImg = '/assets/images/image-mars.png';
  titanImg = '/assets/images/image-titan.png';
  europaImg = '/assets/images/image-europa.png';

  changeImg() {
    this.moonImg = this.moonImg1;
  }
  changeImg1() {
    this.moonImg = this.marsImg;
  }
  changeImg2() {
    this.moonImg = this.europaImg;
  }
  changeImg3() {
    this.moonImg = this.titanImg;
  }

  h3 = '384,400 KM';
  h32 = '3 Days';
  h3Txt = '384,400 KM';
  h32Tx = '3 Days';
  h33 = '225 MIL. KM';
  h34 = '9 Months';
  h35 = '628 MIL. KM';
  h36 = '3 years';
  h37 = '1.6 BIL. KM';
  h38 = '7 years';

  changeh3() {
    this.h3 = this.h3Txt;
    this.h32 = this.h32Tx;
  }
  changeh32() {
    this.h3 = this.h33;
    this.h32 = this.h34;
  }
  changeh33() {
    this.h3 = this.h35;
    this.h32 = this.h36;
  }
  changeh34() {
    this.h3 = this.h37;
    this.h32 = this.h38;
  }

  constructor() {}

  ngOnInit(): void {}
}
