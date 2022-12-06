import { Component,OnInit } from '@angular/core';
import { menuSidebar } from '../nav';
@Component({
  selector: 'app-sildebar',
  templateUrl: './sildebar.component.html',
  styleUrls: ['./sildebar.component.scss']
})
export class SildebarComponent implements OnInit {
  openSidebar: boolean = true;
  menuSidebar=menuSidebar;

  constructor() { }

  ngOnInit(): void {
  }

  showSubmenu(itemEl: HTMLElement) {
    itemEl.classList.toggle("showMenu");
  }
}
