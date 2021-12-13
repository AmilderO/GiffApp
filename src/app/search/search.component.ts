import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    
  }

  @ViewChild('textbox1') dato: any;

  handleClear(){
    this.dato.nativeElement.value = "";
  }

  search(palabra: string) {
    if (palabra !== "") {
      this.dataService.searchGifs(palabra);
    }
  }

  ngOnDestroy(): void { 
      
  }
}
