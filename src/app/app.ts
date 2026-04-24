import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { StatsComponent } from './components/stats/stats';
import { ProblemComponent } from './components/problem/problem';
import { FeaturesComponent } from './components/features/features';
import { HowComponent } from './components/how/how';
import { PricingComponent } from './components/pricing/pricing';
import { CtaFooterComponent } from './components/cta-footer/cta-footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, StatsComponent,
    ProblemComponent, FeaturesComponent, HowComponent,
    PricingComponent, CtaFooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-stats></app-stats>
    <app-problem></app-problem>
    <app-features></app-features>
    <app-how></app-how>
    <app-pricing></app-pricing>
    <app-cta-footer></app-cta-footer>
  `
})
export class AppComponent {}