import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [NgFor],
  templateUrl: './features.html',
  styleUrls: ['./features.css']
})
export class FeaturesComponent {
  features = [
    { icon: '🎯', name: 'Perfil personalizado', desc: 'Datos biométricos, objetivos de salud y condiciones médicas. Un perfil único que evoluciona contigo semana a semana.' },
    { icon: '🚫', name: 'Restricciones inteligentes', desc: 'Diabetes, hipertensión, alergias, intolerancias. Cada plan respeta tus restricciones sin sacrificar variedad ni sabor.' },
    { icon: '📊', name: 'Seguimiento y análisis', desc: 'Visualiza macros y calorías en tiempo real. El sistema ajusta tu plan automáticamente según tu progreso.' },
    { icon: '👨‍⚕️', name: 'Panel profesional', desc: 'Nutriólogos y dietistas gestionan múltiples pacientes, actualizan planes y hacen seguimiento desde un solo lugar.' }
  ];
}