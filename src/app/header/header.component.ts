import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  @Output() selectedTab = new EventEmitter<string>();

  onSelect(choice: string) {
    this.selectedTab.emit(choice);
  }
}
