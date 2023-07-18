import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Sensors', url: '/sensors', icon: 'analytics' },
    { title: 'Notifications', url: '/notifications', icon: 'notifications' },
    { title: 'Settings', url: '/settings', icon: 'settings' },
    { title: 'About', url: '/about', icon: 'information-circle' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Perform any logic needed on route changes
      }
    });
  }

  logout() {
    // Perform logout logic here

    // For example, navigate to the login page after logout
    this.router.navigate(['/login']);
  }
}
