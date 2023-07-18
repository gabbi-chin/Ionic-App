import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit, OnDestroy {
  notifications: any[] = [];
  private timer: any;
  private notificationIndex = 0;

  constructor() { }

  ngOnInit() {
    this.startContinuousReadings();
  }

  ngOnDestroy() {
    this.stopContinuousReadings();
  }

  startContinuousReadings() {
    this.timer = setInterval(() => {
      this.generateSimulatedNotification();
    }, 2000); // Readings every 2 seconds (adjust as needed)
  }

  stopContinuousReadings() {
    clearInterval(this.timer);
  }

  generateSimulatedNotification() {
    const batteryLevels = ['Low', 'Medium', 'High'];
    const rooms = ['Room 1', 'Room 2', 'Room 3'];

    const type = Math.random() < 0.5 ? 'Battery Level' : 'Sensor Data';
    const room = rooms[Math.floor(Math.random() * rooms.length)];

    let message = '';
    if (type === 'Battery Level') {
      const batteryLevel = batteryLevels[Math.floor(Math.random() * batteryLevels.length)];
      message = `Battery level of ${room} is ${batteryLevel}`;
    } else {
      message = `New data gathered from ${room} sensor`;
    }

    const notification = {
      type,
      message,
      timestamp: new Date()
    };
    this.notifications.push(notification);

    // Show notifications one by one
    if (this.notifications.length === 1) {
      this.showNextNotification();
    }
  }

  showNextNotification() {
    if (this.notificationIndex < this.notifications.length) {
      const notification = this.notifications[this.notificationIndex];
      // Show the notification using any desired method (e.g., toast, modal, etc.)
      console.log('Showing notification:', notification);
      this.notificationIndex++;
    }
  }

  getNotificationIcon(type: string) {
    switch (type) {
      case 'Battery Level':
        return 'battery-full-outline';
      case 'Sensor Data':
        return 'analytics-outline';
      default:
        return 'alert-circle-outline';
    }
  }

  clearNotifications() {
    this.notifications = [];
    this.notificationIndex = 0;
  }

  viewNotification(notification: any) {
    // Add your logic to handle the click event for a specific notification
    console.log('Clicked notification:', notification);
  }
}
