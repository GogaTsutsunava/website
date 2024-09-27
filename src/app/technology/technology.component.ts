import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TECHNOLOGYComponent implements OnInit {
  img = '/assets/images/image-launch-vehicle-portrait.jpg';
  img2 = '/assets/images/image-launch-vehicle-portrait.jpg';
  img3 = '/assets/images/image-spaceport-portrait.jpg';
  img4 = '/assets/images/image-space-capsule-portrait.jpg';

  changeImg() {
    this.img = this.img2;
  }
  changeImg2() {
    this.img = this.img3;
  }
  changeImg3() {
    this.img = this.img4;
  }

  text = 'LAUNCH VEHICLE';
  text2 = 'LAUNCH VEHICLE';
  text3 = 'SPACEPORT';
  text4 = 'SPACE CAPSULE';

  changeText() {
    this.text = this.text2;
  }
  changeText2() {
    this.text = this.text3;
  }
  changeText3() {
    this.text = this.text4;
  }

  para =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  para2 =
    'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earths surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!';
  para3 =
    'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.';
  para4 =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

  changePara() {
    this.para = this.para2;
  }
  changePara2() {
    this.para = this.para3;
  }
  changePara3() {
    this.para = this.para4;
  }

  id:any = 'mission'

  tabChange(ids:any){
    this.id = ids
  }
  
  constructor() {}

  ngOnInit(): void {}
}
