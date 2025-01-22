import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';   // Kullanıcıdan alınan e-posta
  password: string = ''; // Kullanıcıdan alınan şifre

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  /**
   * Kullanıcı giriş işlemini tetikleyen fonksiyon.
   * E-posta ve şifre doğruluğunu kontrol eder, ardından giriş işlemini gerçekleştirir.
   */
  login(): void {
    if (!this.email.trim()) { // E-posta boşsa uyarı göster
      alert('Please enter an email');
      return;
    }

    if (!this.password.trim()) { // Şifre boşsa uyarı göster
      alert('Please enter a password');
      return;
    }

    // AuthService üzerinden giriş işlemini gerçekleştir
    this.auth.login(this.email, this.password);

    // E-posta ve şifre alanlarını sıfırla
    this.email = '';
    this.password = '';
  }

  /**
   * Google ile giriş yapma işlemini tetikleyen fonksiyon.
   */
  signInWithGoogle(): void {
    this.auth.googleSignIn();
  }
}
