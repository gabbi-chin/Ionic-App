import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  Name: string = '';
  Address: string = '';
  Contact: string = '';
  Email: string = '';
  Password: string = '';

  constructor(private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  async register() {
    const loading = await this.loadingCtrl.create({
      message: 'Registering...',
      duration: 3000, // 3 seconds
      translucent: true
    });

    await loading.present();

    // Perform registration logic here

    setTimeout(() => {
      loading.dismiss();
      // After successful registration, navigate to the login page
      this.router.navigate(['/login']);
    }, 3000);
  }
}
