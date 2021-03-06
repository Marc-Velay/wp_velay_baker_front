import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { ItemService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];

  constructor(
    private itemService: ItemService
  ) { }

  //Load item list from database on page load.
  ngOnInit() {
    this.getItems();
  }

  //Use the item service to query the list. Then save them to local variable.
  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => {
          this.items = items;
      });
  }
}
