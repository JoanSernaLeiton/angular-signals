import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent {
  title = 'table!';
  changeVariable() {
    this.title = 'this change should run change detections ';
  }
}
