import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({providedIn: 'root'})
export class AlertService{
     
    errorAlert(text: string){
        Swal.fire({
            title: 'Ups',
            text,
            icon: 'error',
            confirmButtonText: 'Aceptar'
        })
    }

    confirmDelete(){
        return Swal.fire({
            title: 'Un momento',
            text: 'Desea eliminar este registro de manera permanente?',
            icon: 'info',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
            showCancelButton: true
        });
    }

    successAlert(text: string){
        Swal.fire({
            title: 'Exito',
            text,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    }
}