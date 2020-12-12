import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

 @Input() isOpened = false;
  menu = 'sort'
  @Output() sideControler = new EventEmitter<boolean>();

  changeState(): void{
    this.isOpened = !this.isOpened;

    if (this.menu === 'sort') {
      this.menu = 'arrow_back_ios'
    } else {
      this.menu = 'sort'
    }
    this.sideControler.emit(this.isOpened);
  }


}
