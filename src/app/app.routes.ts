import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { ArtistaComponent } from './pages/artista/artista.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artista', component: ArtistaComponent },
    { path: '', pathMatch: 'full',  redirectTo: 'home' },
    { path: '**', pathMatch: 'full',  redirectTo: 'home' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {}
