import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  lastUpdate: string = '';
  totalIncidents: number = 0;
  activeIncidents: number = 0;
  resolvedIncidents: number = 0;
  recentIncidents: any[] = [];

  constructor() { }

  ngOnInit() {
    // Fetch and set the values for the variables from the backend or service

    this.lastUpdate = 'July 16, 2023, 10:30 AM';
    this.totalIncidents = 50;
    this.activeIncidents = 10;
    this.resolvedIncidents = 40;
    
    this.recentIncidents = [
      { location: 'Building A, Floor 3', timestamp: 'July 15, 2023, 3:45 PM' },
      { location: 'Building B, Floor 2', timestamp: 'July 14, 2023, 9:15 AM' },
      { location: 'Building C, Floor 1', timestamp: 'July 13, 2023, 6:30 PM' },
      // Add more recent incidents as needed
    ];
  }
}
