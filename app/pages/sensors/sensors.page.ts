import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.page.html',
  styleUrls: ['./sensors.page.scss'],
})
export class SensorsPage implements OnInit {
  selectedRoom: any = null; // Track the selected room
  temperature: number = 0; // Placeholder value for temperature
  gasLevel: number = 0; // Placeholder value for gas level
  humidity: number = 0; // Placeholder value for humidity
  batteryLevel: number = 100; // Placeholder value for battery level

  rooms: any[] = [
    { room: 'Room 1', icon: 'home' },
    { room: 'Room 2', icon: 'home' },
    { room: 'Room 3', icon: 'home' },
    { room: 'Room 4', icon: 'home' },
    { room: 'Room 5', icon: 'home' },
    { room: 'Room 6', icon: 'home' },
    { room: 'Room 7', icon: 'home' },
    { room: 'Room 8', icon: 'home' },
    { room: 'Room 9', icon: 'home' },
    { room: 'Room 10', icon: 'home' }
  ];

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      // Update the readings with new values
      this.temperature = Math.floor(Math.random() * 100);
      this.gasLevel = Math.floor(Math.random() * 100);
      this.humidity = Math.floor(Math.random() * 100);
    }, 1000);
  }

  goToRoom(room: any) {
    this.selectedRoom = room;
    // Perform the necessary logic to fetch sensor readings for the selected room
    this.temperature = Math.floor(Math.random() * 100);
    this.gasLevel = Math.floor(Math.random() * 100);
    this.humidity = Math.floor(Math.random() * 100);
  }

  goBack() {
    this.selectedRoom = null; // Clear the selected room
  }
}
