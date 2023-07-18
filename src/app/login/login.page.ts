import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  Username!: string;
  Password!: string;

  constructor(private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async login() {
    const loading = await this.loadingCtrl.create({
      message: 'Logging in...',
      duration: 3000, // 3 seconds
      translucent: true
    });

    await loading.present();

    // Perform login logic here

    setTimeout(() => {
      loading.dismiss();
      // Navigate to home page
      this.router.navigate(['/home']);
    }, 3000);
  }
}
