import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';

import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interface';


@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  juegos: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {

    this.gameService.getNominados()
    .subscribe(juegos => {
      console.log(juegos);
      this.juegos = juegos;
    });

  }

  votarJuego(id: string){

    this.gameService.votarJuego(id)
    .subscribe( (resp: {ok: boolean, message: string }) => {
      
      if(resp.ok){
        Swal.fire({
          title: 'Gracias!',
          text: resp.message,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
      } else {
        console.log(resp);
        Swal.fire({
          title: 'Upss!',
          text: resp.message,
          icon: 'error',
          confirmButtonText: 'Cerrar'
        });
      }

    });

  }

}
