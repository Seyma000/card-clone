import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component'; // Login bileşenini içe aktar
import { AppComponent } from './app.component;

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Varsayılan olarak login'e yönlendir
  { path: 'login', component: LoginComponent }, // Login sayfası
  { path: 'dashboard', component: AppComponent }, // Arayüz sayfası 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
