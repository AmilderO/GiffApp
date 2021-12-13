import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  gifs = new BehaviorSubject<any>([]);
  private historial: Array<String> = [];
   

  constructor ( private http: HttpClient ) {  }

  getTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=MRPvMqUcmsILNyyU1pleJj9IHaN3r0TM&limit=25&rating=g`)
    .subscribe(
      (response: any) => {
        this.gifs.next(response.data);
      }
    )
  }

  searchGifs(palabra: String){
    this.historial.push(palabra);
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${ palabra }&api_key=MRPvMqUcmsILNyyU1pleJj9IHaN3r0TM&q=&limit=25&offset=0&rating=g&lang=en`)
    .subscribe(
      (response: any) => {
        this.gifs.next(response.data);
        
        console.log(this.gifs);
        }
    );
  }

  getHistorial() {
    return this.historial;
  }

  getGifs() {
    return this.gifs.asObservable();
  }

}
