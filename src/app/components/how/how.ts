import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-how',
  standalone: true,
  imports: [NgFor],
  templateUrl: './how.html',
  styleUrls: ['./how.css']
})
export class HowComponent {
  steps = [
    { num: '01', name: 'Crea tu perfil', desc: 'Cuéntanos sobre ti: tu cuerpo, tus objetivos, condiciones médicas y preferencias alimenticias. Solo toma 2 minutos.' },
    { num: '02', name: 'Recibe tu plan', desc: 'BiteWise genera un plan semanal completamente personalizado con recetas, porciones y valores nutricionales detallados.' },
    { num: '03', name: 'Evoluciona y ajusta', desc: 'Registra tus comidas y deja que el sistema ajuste automáticamente tu plan según tus avances y metas reales.' }
  ];
}