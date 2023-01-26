import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IngresadoGuard } from './ingresado.guard';

@Injectable({
  providedIn: 'root'
})
export class IngresoClienteGuard implements CanActivate {

  constructor(public navCtrl: NavController){


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('tipoIngreso')){
        return true;
      }else{
        this.navCtrl.navigateRoot('/login');
        return false;
      }
  }





}
