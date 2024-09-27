import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit {
  img = '/assets/images/image-douglas-hurley.png';
  imgmain = '/assets/images/image-douglas-hurley.png';
  img2 = '/assets/images/image-mark-shuttleworth.png';
  img3 = '/assets/images/image-victor-glover.png';
  img4 = '/assets/images/image-anousheh-ansari.png';

  changeImg() {
    this.img = this.img2;
  }
  changeImgm() {
    this.img = this.imgmain;
  }
  changeImg2() {
    this.img = this.img3;
  }
  changeImg3() {
    this.img = this.img4;
  }
  changeImg4() {
    this.img = this.img2;
  }

  paragraph1 =
    'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
  para =
    'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
  paragraph2 =
    'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.';
  paragraph3 =
    'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ';
  paragraph4 =
    'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ';

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
  DouglasHurley = 'Douglas Hurley';
  DouglasHurley2 = 'Douglas Hurley';
  MARKSHUTTLEWORTH = 'MARK SHUTTLEWORTH';
  VictorGlover = 'Victor Glover';
  AnoushehAnsari = 'Anousheh Ansari';

  changeTxt() {
    this.DouglasHurley = this.DouglasHurley2;
  }
  changeTxt2() {
    this.DouglasHurley = this.MARKSHUTTLEWORTH;
  }
  changeTxt3() {
    this.DouglasHurley = this.VictorGlover;
  }
  changeTxt4() {
    this.DouglasHurley = this.AnoushehAnsari;
  }

  Commander = 'Commander';
  MissionSpecialist = 'Mission Specialist ';
  Commander2 = 'Commander';
  PILOT = 'PILOT';
  FlightEngineer = 'Flight Engineer';

  changeh3() {
    this.Commander = this.Commander2;
  }
  changeh32() {
    this.Commander = this.MissionSpecialist;
  }
  changeh33() {
    this.Commander = this.PILOT;
  }
  changeh34() {
    this.Commander = this.FlightEngineer;
  }


  id: any = 'mission'

  tabChange(ids: any) {
    this.id = ids
  }

  constructor() { }

  ngOnInit(): void { }
}
