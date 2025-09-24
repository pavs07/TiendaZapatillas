import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Nosotros } from './pages/nosotros/nosotros';
import { Productos } from './pages/productos/productos';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: Nosotros },
  { path: 'productos', component: Productos },
  { path: 'contacto', component: Contacto },
  { path: '**', redirectTo: '' },
];
