import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  historial: Array<String> = [];

  constructor(private dataService: DataService ) { }

  ngOnInit(): void {

    this.historial = this.dataService.getHistorial();

  }

  clear() {
    window.location.reload();
  }
}
