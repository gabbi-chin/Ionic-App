import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkModeEnabled: boolean = false;
  notificationSoundEnabled: boolean = true;

  constructor() {}

  ngOnInit() {}

  toggleDarkMode() {
    this.darkModeEnabled = !this.darkModeEnabled;

    // Apply dark mode styles or update CSS variables as needed
    if (this.darkModeEnabled) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  toggleNotificationSound() {
    this.notificationSoundEnabled = !this.notificationSoundEnabled;

    // Perform any necessary actions when the notification sound is toggled
    if (this.notificationSoundEnabled) {
      // Enable notification sound
    } else {
      // Disable notification sound
    }
  }
}
