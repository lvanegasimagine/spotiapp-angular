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
    
    const headers = new HttpHeaders(
      {
        'Authorization': 'Bearer BQD5QCeWoYpbimWk4sIwKx8n3V49IpdGjdI_bKlK4BIpu7qckaeOCaQygKuUDmunCvIkzOZWPyGc9BzoWTM'
      });

    this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
        .subscribe(data =>{
          console.log(data);
        });
  }
}
