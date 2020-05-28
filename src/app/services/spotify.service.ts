import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) { 
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAnQeRhES7W-TniiMAbPBBBICgER0ILkJReyq6TneJqukRKR9kjjORrmh7ycdGU2DNW43ROxSHMdcKQwgM'
    });

    return this.http.get(url, {headers}); 
  }

  getNewRelease(){

    return this.getQuery('browse/new-releases')
                .pipe(map ( data => {
                      return data['albums'].items;
                }));
  }

  getArtista(termino: string){
    
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe(map((data: any) => {
                   return data.artists.items;
                }));
  }
}
