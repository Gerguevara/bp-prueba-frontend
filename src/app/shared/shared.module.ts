import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [SidenavComponent, FooterComponent],
  imports: [ CommonModule],
  exports:[SidenavComponent, FooterComponent]
})
export class SharedModule { }
