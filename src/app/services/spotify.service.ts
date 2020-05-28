import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Soy el servicio del spotify');
  }

  getNewRelease(){

    const headers = new HttpHeaders({
        'Authorization': 'Bearer BQDjNJKbCSDR5fkxj8N1YzvUInL-l417FeMNUH2m7EMszRv6YOMhws0Nm72DB4HwULjehI7eO9Rz3k8RYsI'
      });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

  }

  getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDjNJKbCSDR5fkxj8N1YzvUInL-l417FeMNUH2m7EMszRv6YOMhws0Nm72DB4HwULjehI7eO9Rz3k8RYsI'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, {headers});
  }
}
