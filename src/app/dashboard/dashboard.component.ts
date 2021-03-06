import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../items.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  items: Item[] = [];
  topItems: Item[] = [];

  constructor(private itemService: ItemService) { }

  //Load items on page load
  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => {
          this.items = items;
          this.topItems = items.slice(0, 5); //Keep the first 5 items as the "top" items
      });
  }
}
