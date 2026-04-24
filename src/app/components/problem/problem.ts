import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [NgFor],
  templateUrl: './problem.html',
  styleUrls: ['./problem.css']
})
export class ProblemComponent {
  badItems = [
    { title: 'Planes genéricos sin contexto médico', desc: 'Las mismas recomendaciones para todos, sin importar tu cuerpo o condiciones.' },
    { title: 'Sin integración biométrica real', desc: 'Ignoran peso, talla, exámenes clínicos y hábitos culturales.' },
    { title: 'Abandono temprano garantizado', desc: 'La falta de personalización lleva a la frustración y al abandono en semanas.' }
  ];
  goodItems = [
    { title: 'Perfil clínico real y personalizado', desc: 'Adapta cada recomendación a tus restricciones, condiciones médicas y objetivos.' },
    { title: 'Seguimiento nutricional en tiempo real', desc: 'Análisis de macros, calorías y avances ajustado a tu progreso semanal.' },
    { title: 'Hábitos que se mantienen', desc: 'La personalización real genera adherencia sostenida y resultados visibles.' }
  ];
}