import { Component, OnInit, Input } from '@angular/core';
import { menus, MenuMaker } from './menu-element';

@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

    public new_menus;
    curr_index: number = 0;
    str: string;

    @Input() iconOnly:boolean = false;
    public menus = menus;

    constructor() { }

    ngOnInit() {
      const menuMaker = new MenuMaker();
      this.menus = menuMaker._menuMaker();     
    }

}
