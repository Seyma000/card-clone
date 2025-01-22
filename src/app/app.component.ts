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
  encapsulation: ViewEncapsulation.None,
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
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.isShineVisible = true;

    // Shine X ve Y koordinatlarını hesapla
    this.shineX = event.clientX - rect.left;
    this.shineY = event.clientY - rect.top;

    // Kart dönüşümünü ayarla
    const rotateX = (this.shineY - rect.height / 2) / 10;
    const rotateY = (this.shineX - rect.width / 2) / 10;
    this.cardTransform = `perspective(700px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
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
      left: `${this.shineX - 50}px`, // Shine efektini kartın üzerine yerleştir
      top: `${this.shineY - 50}px`, // Shine efektinin Y koordinatını ayarla
      opacity: this.isShineVisible ? 1 : 0,
    };
  }
}
