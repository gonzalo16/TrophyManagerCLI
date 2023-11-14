import { Injectable } from '@angular/core';
import { Usuario } from '../entities/Usuario';
import { USUARIOS } from '../datos/usuario.json';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  getUsuarios(): Usuario[]{
    return USUARIOS;
  }
}
