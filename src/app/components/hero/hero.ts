import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPreviewComponent } from '../dashboard-preview/dashboard-preview';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, DashboardPreviewComponent],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  typedText = '';
  private words = ['vivir mejor.', 'controlar tu diabetes.', 'ganar músculo.', 'perder peso.', 'sentirte bien.'];
  private wi = 0; private ci = 0; private deleting = false;
  private timer: any;

  ngOnInit() { this.type(); }
  ngOnDestroy() { clearTimeout(this.timer); }

  private type() {
    const word = this.words[this.wi];
    if (!this.deleting) {
      this.typedText = word.slice(0, ++this.ci);
      if (this.ci === word.length) { this.deleting = true; this.timer = setTimeout(() => this.type(), 1800); return; }
      this.timer = setTimeout(() => this.type(), 70);
    } else {
      this.typedText = word.slice(0, --this.ci);
      if (this.ci === 0) { this.deleting = false; this.wi = (this.wi + 1) % this.words.length; this.timer = setTimeout(() => this.type(), 300); return; }
      this.timer = setTimeout(() => this.type(), 38);
    }
  }
}