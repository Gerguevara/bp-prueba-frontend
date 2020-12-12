import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumComponent } from './components/breadcrum/breadcrum.component';


@NgModule({
  declarations: [SidenavComponent, FooterComponent, BreadcrumComponent],
  imports: [ CommonModule ],
  exports:[SidenavComponent, FooterComponent, BreadcrumComponent]
})
export class SharedModule { }
