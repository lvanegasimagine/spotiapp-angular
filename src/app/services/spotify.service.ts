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
      'Authorization': 'Bearer BQCVypPmV2fg8NLTDfOWsYsoy6pzpxQj_AvRRTcRvYuCXsVW_Q9yoOyRts0FtGXOca7VIJbT4TakSApB3-0'
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
