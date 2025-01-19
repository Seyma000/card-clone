import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'card-clone';

  // Shine efektinin durumunu kontrol eden değişkenler
  isShineVisible = false;
  shineX = 0;
  shineY = 0;

  // Kart dönüşümü
  cardTransform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';

  // Fareyle üzerine gelindiğinde shine efektini göster
  showShineEffect(event: MouseEvent) {
    this.isShineVisible = true;
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.shineX = event.clientX - rect.left;
    this.shineY = event.clientY - rect.top;

    // Kart dönüşümü
    this.cardTransform = `perspective(700px) rotateX(${(this.shineY - rect.top) / 200}deg) rotateY(${(this.shineX - rect.left) / 200}deg)`;
  }

  // Fareyle karttan çıktığında shine efektini gizle
  hideShineEffect() {
    this.isShineVisible = false;
    // Kart dönüşümünü sıfırla
    this.cardTransform = 'perspective(700px) rotateX(0deg) rotateY(0deg)';
  }

  // Kartlar üzerinde shine efektinin konumunu güncelle
  getShineStyle() {
    return {
      left: `${this.shineX - 120}px`, // Shine efektini kartın üzerine yerleştir
      top: `${this.shineY - 80}px`, // Shine efektinin Y koordinatını ayarla
      opacity: this.isShineVisible ? 1 : 0
    };
  }
}
